import React from "react";
import NextHead from "next/head";
import * as config from '../utils/config';

type Props = {
  title: string,
  description?: string,
  url?: string,
  image?: string,
  metaTags?: string[],
  altText?: string
}
const CustomHead = (props: Props) => {
  const APP_NAME = config.APP_NAME;
  const Title = config.TITLE;
  const Description = config.DESCRIPTION;
  const Website = config.WEBSITE;
  const Icon = config.ICON;
  const FacebookId = config.FACEBOOK_ID;
  const Banner = config.BANNER_IMAGE;

  return(
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || Title}</title>
    <meta name="description" content={props.description || Description} />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
    {props.metaTags && props.metaTags.length > 0 ? (
      <meta name="keywords" content={props.metaTags.join(",")}></meta>
    ): (
      <meta name="keywords" content="SPICYDELI,FOOD,RESTAURANT,FLAVOURS"></meta>
    )}
    <link rel="canonical" href={Website} />
    <meta property="fb:app_id" content={FacebookId} />
    <link href={Icon} rel="icon" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={props.title || Title} />
    <meta name="twitter:description" content={props.description || Description} />
    <meta name="twitter:url" content={props.url || Website} />
    <meta name="twitter:site" content={props.url || Website} />
    <meta name="twitter:creator" content={props.url || Website} />
    <meta name="twitter:image" content={props.image || Banner} />

    {/* Open Graph / Facebook */}
    <meta property="og:locale" content={"en"} />
    <meta property="og:type" content="website" /> 
    <meta property="og:title" content={props.title || Title}/>
    <meta property="og:description" content={ props.description || Description } />
    <meta property="og:url" content={props.url || Website} />
    <meta property="og:site_name" content={Title} />
    <meta property="og:image" content={props.image || Banner} />
    <meta property="og:image:secure_url" content={props.url || Banner} />
    <meta property="og:image:width" content="1920" /> 
    <meta property="og:image:height" content="1080" /> 
    <meta property="og:image:alt" content={props.altText || APP_NAME} />
    
  </NextHead>
)}

export default CustomHead;
