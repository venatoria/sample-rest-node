#!/bin/sh
#
# deploy.sh
# CircleCI will call this script to deploy
# This script will be pushed by CircleCI along with a docker image
# Refer to the config.yml for the flow
#

# Let's check if our instance has Docker and running
# If not we will need to install it

which docker

if [ $? -eq 0 ]
then
    echo "docker already installed.."
else
     #Install Docker and start it 
     curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
     sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
     sudo apt-get update
     sudo apt-cache policy docker-ce
     sudo apt-get install -y docker-ce
     sudo systemctl status docker
fi

#Cleaning previous runs
echo "=> Cleaning all containers"

#Stop all containers except the db one
sudo docker stop $(sudo docker ps -a -q)

# Delete all containers except the db one
sudo docker rm $(sudo docker ps -a -q)

# Delete all images except the db one
sudo docker rmi $(sudo docker images -q)

# Load the images put here by CircleCI
sudo docker load -i emasters-connection-docker-image.tar

#Run the app within the container
sudo docker run -d venatoria/emasters-connection-api
echo "=> Running eMasters Connection API.."
