import * as Joi from "joi";

export const TokenListingSchemaValidator = Joi.object( {
    contractAddress: Joi.string().required(),
    proxyContractAddress: Joi.string().required(),
    network: Joi.string().required(),
    decimals: Joi.number().required(),
    symbol: Joi.string().required().uppercase(),
    name: Joi.string().required(),
    contractABI: Joi.string().required(),
    logoUrl: Joi.string().required(),
} );
