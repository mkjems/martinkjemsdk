#!/usr/bin/env bash

echo I am provisioning...

# Write system description
lsb_release -a

# Update package system
sudo apt-get upgrade
sudo apt-get autoremove -y

# install make
sudo apt-get install make

# instal monit
sudo apt-get install monit
# Change monit conf permissions
sudo chmod 0700 /etc/monit/monitrc
# Copy our monitrc to /etc/monit/conf.d
sudo cp /vagrant/monitrc /etc/monit/conf.d/

# Nodejs and npm
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
sudo apt-get install -y nodejs

# nodemon
#https://github.com/remy/nodemon
npm install -g nodemon

# Celebrate!
date > /etc/vagrant_provisioned_at

# Install npm packs for server
cd /vagrant
npm install

pwd
MY_DIR=$(pwd)
export MY_DIR
echo "I'm done provisioning"

# Delete tmp dir
sudo rm -rf /vagrant/tmp/

mkdir /vagrant/tmp/
mkdir -p /vagrant/logs/

# Start Monit
echo "Starting monit"
sudo monit -vv

