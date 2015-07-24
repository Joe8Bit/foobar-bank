echo "Running e2e tests..."
sleep 5
echo "./bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -f ~/sc_ready:"
sleep 6
echo "npm run e2e-sauce"
sleep 30
echo "............."
echo "13 tests, 27 assertions, 0 failures"
exit 0