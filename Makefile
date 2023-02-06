install:
	npm ci

publish:
	npm publish --dry-run

genDiff:
	npm link

lint: 
	npx eslint .

lint-fix: 
	npx eslint --fix .