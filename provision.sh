#!/usr/bin/env bash

echo "**********************************************"
echo "I am starting provisioning "
echo $1
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

# install nodemon

npm install -g nodemon

echo "**********************************************"
echo "Install server npm packages"
echo "**********************************************"

# Install npm packs for server
npm config set loglevel info
cd /vagrant/server
make install

echo "**********************************************"
echo "Build client website"
echo "**********************************************"

cd /vagrant/client
sudo npm install -g react-tools
make build

echo "**********************************************"
echo "Create some folders"
echo "**********************************************"

cd /vagrant/
pwd
MY_DIR=$(pwd)
export MY_DIR
date > /etc/vagrant_provisioned_at

mkdir -p /vagrant/server/tmp/
mkdir -p /vagrant/server/logs/

echo "**********************************************"
echo "Install supervisord"
echo "**********************************************"

sudo apt-get install python-setuptools
sudo easy_install supervisor

if [ $1 = "dev-mode" ]; then
	echo "**********************************************"
	echo "Starting node server in dev-mode"
	echo "**********************************************"

	# install entr
	sudo apt-get install entr

	cd /vagrant/server
	sudo nodemon -w routes server
else
	echo "**********************************************"
	echo "Starting supervisord"
	echo "**********************************************"
	# start supervisord that will start the server
	sudo supervisord -c /vagrant/supervisord.conf
fi

echo "**********************************************"
echo "Done provisioning..."
echo "**********************************************"
