dev-machine:
	PROVISION_ARGS='dev-mode' vagrant up --provider=virtualbox

prod-machine:
	vagrant up --provider=digital_ocean --provision

prod-machine-redeploy:
	vagrant rebuild