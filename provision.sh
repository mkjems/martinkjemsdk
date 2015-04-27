#!/usr/bin/env bash

echo I am provisioning...

# Write system description
lsb_release -a

# Update package system
sudo apt-get upgrade
sudo apt-get autoremove -y

# install make
apt-get install make

# Nodejs and npm
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
sudo apt-get install -y nodejs

# nodemon
#https://github.com/remy/nodemon
npm install -g nodemon

# Celebrate!
date > /etc/vagrant_provisioned_at
pwd
echo "I'm done provisioning"

