import { TokenListingSchemaValidator } from "./token-listing-schema.validator";
import { join } from "path";
import { readdirSync, readFileSync } from "fs";

const tokensDirPath = join( __dirname, "..", "tokens" );

const tokenList = readdirSync( tokensDirPath );

tokenList.forEach( ( token ) => {
    if ( token.endsWith( ".example.json" ) ) {
        return;
    }

    if ( token.endsWith( ".json" ) ) {
        const tokenPath = join( tokensDirPath, token );
        const tokenJson = readFileSync( tokenPath, { encoding: "utf-8" } );
        const tokenParsed = JSON.parse( tokenJson );

        if ( TokenListingSchemaValidator.validate( tokenParsed ) ) {
            console.log( `Token Schema is Valid for ${token}` );
        } else {
            console.log( `Error: Not a Valid Token: ${token}` );
            process.exit( 1 );
        }
    } else {
        console.log( `Error: Not a JSON file: ${token}` );
        process.exit( 1 );
    }
} );
