// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Whitelist{

    // maximum number of addresses which can be whitelisted
    uint8 public maxWhitelistedAddresses;

    //keep track of number of addresses whitelisted till now
    uint8 public numAddressesWhitelisted;

    //create a mapping of WhitelistAddresses
    //if an address is whitelisted, we would set it truem it is false by dafault for all other addresses.
    mapping(address => bool) public whitelistedAddresses;

    //Setting the Max number of whitelisted addresses
    //User will put the value at the time of deployment
    constructor(uint8 _maxWhitelistedAddresses){
        maxWhitelistedAddresses = _maxWhitelistedAddresses;
    }

    //addAddressToWhitelist - This function adds the address of the sender to the whitelist

    function addAddressToWhitelist() public {
        // check if the the user has already been whitelisted
        require(!whitelistedAddresses[msg.sender],"Sender already in the whitelisted");
        // check if the numAddressesWhitelisted < max WhitelistedAddresses, if not then throw error  
        require(numAddressesWhitelisted < maxWhitelistedAddresses,"Max listed reached");
        // add the address which called the function to the whitelistedAddress array
        whitelistedAddresses[msg.sender] = true;
        // Increase the number of the whitelisted addresses
        numAddressesWhitelisted += 1;


    }
}