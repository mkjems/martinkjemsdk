#!/usr/bin/env bash

echo "**********************************************"
echo "I am starting the provisioning now"
echo "**********************************************"

# Write system description
lsb_release -a

echo "**********************************************"
echo "Upgrade apt-get"
echo "**********************************************"

# Update package system
sudo apt-get upgrade

echo "**********************************************"
echo "Delete some apt-get stuff"
echo "**********************************************"

sudo apt-get autoremove -y

# install make
sudo apt-get install make

echo "**********************************************"
echo "Installing node"
echo "**********************************************"

# Nodejs and npm
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
sudo apt-get install -y nodejs

echo "**********************************************"
echo "Install npm packages"
echo "**********************************************"

# Install npm packs for server
npm config set loglevel info
cd /vagrant
npm install

echo "**********************************************"
echo "Create some folders"
echo "**********************************************"

pwd
MY_DIR=$(pwd)
export MY_DIR
date > /etc/vagrant_provisioned_at

mkdir -p /vagrant/tmp/
mkdir -p /vagrant/logs/

echo "**********************************************"
echo "Install supervisord"
echo "**********************************************"

sudo apt-get install python-setuptools
sudo easy_install supervisor

# start supervisord
sudo supervisord -c /vagrant/supervisord.conf

echo "**********************************************"
echo "Done provisioning..."
echo "**********************************************"
