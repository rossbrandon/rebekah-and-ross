#!/bin/bash

POSITIONAL=()
while [[ $# -gt 0 ]]
do
key="$1"

case $key in
    -e|--email)
    CLOUDFLARE_AUTH_EMAIL="$2"
    shift # past argument
    shift # past value
    ;;
    -k|--authkey)
    CLOUDFLARE_AUTH_KEY="$2"
    shift # past argument
    shift # past value
    ;;
    -z|--zone)
    CLOUDFLARE_ZONE="$2"
    shift # past argument
    shift # past value
    ;;
    *)    # unknown option
    POSITIONAL+=("$1") # save it in an array for later
    shift # past argument
    ;;
esac
done
set -- "${POSITIONAL[@]}" # restore positional parameters

# delete cloudflare cache
curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE/purge_cache" \
     -H "X-Auth-Email: $CLOUDFLARE_AUTH_EMAIL" \
     -H "Authorization: Bearer $CLOUDFLARE_AUTH_KEY" \
     -H "Content-Type: application/json" \
     --data '{"purge_everything":true}'
