OPTS_COVERAGE:= --coverage
OPTS_ENV:= cross-env NODE_ENV=test
test:
	${OPTS_ENV} jest "test/.*\\.test\\.ts"

coverage:
	${OPTS_ENV} jest ${OPTS_COVERAGE}

checkCovered:
	node ./coverageUtil/checkCovered.js

.PHONY: test coverage checkCovered
