// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface UniswapV2Factory {
    function getPair(address tokenA, address tokenB)
        external
        view
        returns (address pair);
}

interface UniswapV2Pair {
    function getReserves()
        external
        view
        returns (
            uint112 reserve0,
            uint112 reserve1,
            uint32 blockTimestampLast
        );
}

contract UniswapInterfaceExample {
    address immutable i_factory;
    address immutable i_dai;
    address immutable i_weth;

    constructor(
        address _factory,
        address _dai,
        address _weth
    ) {
        i_factory = _factory;
        i_dai = _dai;
        i_weth = _weth;
    }

    function getTokenReserves() external view returns (uint, uint) {
        address pair = UniswapV2Factory(i_factory).getPair(i_dai, i_weth);
        (uint reserve0, uint reserve1, ) = UniswapV2Pair(pair).getReserves();
        return (reserve0, reserve1);
    }
}
