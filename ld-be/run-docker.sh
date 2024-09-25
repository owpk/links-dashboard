#!/bin/sh

read -p "Backend misc dir (/path/to/buttons.json): " BACKEND_MISC

G_EXE=./gradlew
VERSION=$($G_EXE properties -q | awk '/^version:/ {print $2}')
IMAGE_TAG=owpk-homepage-backend:$VERSION
CONTAINER_NAME=homeowpk-backend

LOCAL_VOL="${HOMEPAGE_LOCAL_VOL:-$BACKEND_MISC}"
echo "Local volumne: $LOCAL_VOL"

$G_EXE clean
$G_EXE bootJar

docker stop $CONTAINER_NAME 2> /dev/null
docker container rm -f $CONTAINER_NAME 2> /dev/null
docker image rm $IMAGE_TAG 2> /dev/null
docker build --no-cache --tag=$IMAGE_TAG .
docker run --restart always -p 8001:8001 -d -v "$LOCAL_VOL":/app --name $CONTAINER_NAME $IMAGE_TAG
