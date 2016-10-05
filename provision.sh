#!/usr/bin/env bash

echo "**********************************************"
echo "I am starting provisioning "
echo $1
echo "**********************************************"

# Write system description
lsb_release -a

echo "**********************************************"
echo "Set some localisation "
echo "**********************************************"
export LANGUAGE=en_US.UTF-8
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
locale-gen en_US.UTF-8
dpkg-reconfigure locales

echo "**********************************************"
echo "Upgrade apt-get"
echo "**********************************************"

# Update package system
sudo apt-get upgrade

sudo apt-get update

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

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs

# npm build tools
sudo apt-get install -y build-essential

# install nodemon
sudo npm install -g nodemon

echo "**********************************************"
echo "Install server npm packages"
echo "**********************************************"

# Install npm packs for server
# sudo npm config set loglevel info
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

if [ -z $1 ]; then
	echo "**********************************************"
	echo "Starting supervisord"
	echo "**********************************************"
	# start supervisord that will start the server
	sudo supervisord -c /vagrant/supervisord.conf

elif [ $1 = "dev-mode" ] ; then

	echo "**********************************************"
	echo "Starting node server in dev-mode"
	echo "**********************************************"

	# install entr
	sudo apt-get install entr
	cd /vagrant/client
	make watch-static &

	cd /vagrant/server
	sudo nodemon -w routes server &
fi

echo "**********************************************"
echo "Done provisioning..."
echo "**********************************************"
