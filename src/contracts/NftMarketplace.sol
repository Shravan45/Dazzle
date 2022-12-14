// SPDX-License-Identifier: UNLICENSED
pragma solidity >0.5.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract NftMarketplace is TRC721, TRC165, ReentrancyGuard {

    struct Listing {
        uint256 price;
        address seller;
    }

    // Events

    event ItemListed(address indexed seller, address indexed nftAddress, uint256 indexed tokenId, uint256 price);

    event ItemCanceled(address indexed seller, address indexed nftAddress, uint256 indexed tokenId);

    event ItemBought(address indexed buyer, address indexed nftAddress, uint256 indexed tokenId, uint256 price);


    // State Variables

    // Mapping of NFT Contract address to Token ID that point to listing struct.
    // Each Token ID, points to data that identifies seller of that token and price
    mapping(address => mapping(uint256 => Listing)) private s_listings;

    // Mapping between seller's address & amount they earned
    mapping(address => uint256) private s_proceeds;


    // Modifiers

    // Token ID is not listed
    modifier notListed(address nftAddress, uint256 tokenId) {
        Listing memory listing = s_listings[nftAddress][tokenId];
        if (listing.price > 0) {
            revert AlreadyListed(nftAddress, tokenId);
        }
        _;
    }

    modifier isListed(address nftAddress, uint256 tokenId) {
        Listing memory listing = s_listings[nftAddress][tokenId];
        if (listing.price <= 0) {
            revert NotListed(nftAddress, tokenId);
        }
        _;
    }

    modifier isOwner(address nftAddress, uint256 tokenId, address spender) {
        TRC721 nft = TRC721(nftAddress);
        address owner = nft.ownerOf(tokenId);
        if (spender != owner) {
            revert NotOwner();
        }
        _;
    }

    /* ==== Main Function ==== */
    
    /*
     * Method for listing NFT
     * @param nftAddress Address of NFT contract
     * @param tokenId Token ID of NFT
     * @param price sale price for each item
     */
    function listItem(address nftAddress, uint256 tokenId, uint256 price) external notListed(nftAddress, tokenId) isOwner(nftAddress, tokenId, msg.sender) {
        if (price <= 0) {
            revert PriceMustBeAboveZero();
        }

        TRC721 nft = TRC721(nftAddress);
        if (nft.getApproved(tokenId) != address(this)) {
            revert NotApprovedForMarketplace();
        }
        
        s_listings[nftAddress][tokenId] = Listing(price, msg.sender);
        emit ItemListed(msg.sender, nftAddress, tokenId, price);
    }

    /*
     * Method for cancelling listing
     * @param nftAddress Address of NFT contract
     * @param tokenId Token ID of NFT
     */
    function cancelListing(address nftAddress, uint256 tokenId) external isOwner(nftAddress, tokenId, msg.sender) isListed(nftAddress, tokenId) {
        delete (s_listings[nftAddress][tokenId]);
        emit ItemCanceled(msg.sender, nftAddress, tokenId);
    }

    /*
     * Method for buying listing
     * @param nftAddress Address of NFT contract
     * @param tokenId Token ID of NFT
     */
    function buyItem(address nftAddress, uint256 tokenId) external payable isListed(nftAddress, tokenId) nonReentrant {
        Listing memory listedItem = s_listings[nftAddress][tokenId];
        if (msg.value < listedItem.price) {
            revert PriceNotMet(nftAddress, tokenId, listedItem.price);
        }

        s_proceeds[listedItem.seller] += msg.value;
        delete (s_listings[nftAddress][tokenId]);
        TRC721(nftAddress).safeTransferFrom(listedItem.seller, msg.sender, tokenId);
        emit ItemBought(msg.sender, nftAddress, tokenId, listedItem.price);
    }

    /*
     * Method to allow the seller to update listing
     * @param nftAddress Address of NFT contract
     * @param tokenId Token ID of NFT
     * @param newPrice Price in Wei of the item
     */
    function updateListing(address nftAddress, uint256 tokenId, uint256 newPrice) external isListed(nftAddress, tokenId) nonReentrant
        isOwner(nftAddress, tokenId, msg.sender) {
        if (newPrice <= 0) {
            revert PriceMustBeAboveZero();
        }
        s_listings[nftAddress][tokenId].price = newPrice;
        emit ItemListed(msg.sender, nftAddress, tokenId, newPrice);
    }

    /*
     * Method for withdrawing proceeds from sales.
     * Sending the caller of the method whatever their balance in the s_proceeds state variable is.
     */
    function withdrawProceeds() external {
        uint256 proceeds = s_proceeds[msg.sender];
        if (proceeds <= 0) {
            revert NoProceeds();
        }
        s_proceeds[msg.sender] = 0;
        (bool success, ) = payable(msg.sender).call{value: proceeds}("");   // sending value to caller addresses
        require(success, "Transfer failed");
    }

    /* ==== Getter Function ==== */

    // For finding who is the seller & how much the token is listed for
    function getListing(address nftAddress, uint256 tokenId) external view returns (Listing memory) {
        return s_listings[nftAddress][tokenId];
    }

    // how much a seller has earned i.e. Sale Proceeds
    function getProceeds(address seller) external view returns (uint256) {
        return s_proceeds[seller];
    }
}