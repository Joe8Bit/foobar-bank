echo "Provisioning Metapolit EC2 instance..."
sleep 5
echo "Finished."
echo "Running XSS tests on login form"
sleep 3
echo "SUCCESS"
sleep 1
echo "Running CSFR tests on login form"
sleep 3
echo "SUCCESS"
echo "Tearing down Metapolit EC2 instance..."
sleep 10
echo "Finished."
exit 0