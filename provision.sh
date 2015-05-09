#!/usr/bin/env bash

echo "**********************************************"
echo "I am provisioning..."
echo "**********************************************"

# Write system description
lsb_release -a

# Update package system
sudo apt-get upgrade
sudo apt-get autoremove -y

# install make
sudo apt-get install make

echo "**********************************************"
echo "Installing node"
echo "**********************************************"

# Nodejs and npm
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
sudo apt-get install -y nodejs

date > /etc/vagrant_provisioned_at

echo "**********************************************"
echo "Install npm packages"
echo "**********************************************"

# Install npm packs for server
cd /vagrant
npm install

echo "**********************************************"
echo "Create some folders"
echo "**********************************************"

pwd
MY_DIR=$(pwd)
export MY_DIR

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
