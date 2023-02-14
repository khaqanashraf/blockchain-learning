// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Enum {
    enum ShippingStatus {
        PENDING,
        CANCEL,
        SHIPPED
    }

    ShippingStatus public shippingStatus;

    constructor() {}

    function getShippingStatus() public view returns (ShippingStatus) {
        return shippingStatus;
    }

    function cancelShipping() public {
        shippingStatus = ShippingStatus.CANCEL;
    }

    function completeShipping() public {
        shippingStatus = ShippingStatus.SHIPPED;
    }
}
