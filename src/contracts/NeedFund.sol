// SPDX-License-Identifier : MIT

pragma solidity ^0.8.23;

contract NeedFund {
    //
    address private owner;
    uint256 private balance;
    uint256 private totalProject;
    uint256 private projectTax;
    Stats private stats;
    Project[] private projects;

    mapping(address user => Project[] projects) private projectsOf;
    mapping(uint256 => Backer[]) private backersOf;
    mapping(uint256 => bool) private isProjectExisted;

    enum NeedFundStatus {
        OPEN,
        APPROVED,
        REVERTED,
        DELETED,
        PAIDOUT
    }

    struct Stats {
        uint256 totalProjects;
        uint256 totalBacking;
        uint256 totalDonations;
    }

    struct Backer {
        address owner;
        uint256 totalDonatingAmount;
        uint256 timestamp;
        bool refunded;
    }

    struct Project {
        uint256 index;
        address owner;
        string projectTitle;
        string projectDescription;
        string projectImageURL;
        uint256 cost;
        uint256 raised;
        uint256 totalRaisedSoFar;
        uint256 timestamp;
        uint256 expiredAt;
        uint256 backers;
        NeedFundStatus status;
    }

    event Action(
        uint256 id,
        string actionType,
        address indexed caller,
        uint256 timestamp
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Must be owner");
        _;
    }

    modifier cannotSendEmptyInput(
        string memory title,
        string memory description,
        string memory imageURL
    ) {
        require(bytes(title).length > 0, "Title cannot be empty");
        require(bytes(description).length > 0, "Description cannot be empty");
        require(bytes(imageURL).length > 0, "Image URL cannot be empty");
        _;
    }

    constructor(uint256 _projectTax) {
        owner = msg.sender;
        projectTax = _projectTax;
    }

    function createProject(
        string memory title,
        string memory description,
        string memory imageURL,
        uint256 costNeeded,
        uint256 expiredAt
    )
        external
        cannotSendEmptyInput(title, description, imageURL)
        returns (bool isSuccessCreateProject)
    {
        
    }
    //
}
