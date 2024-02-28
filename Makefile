ROOT_DIRECTORY = $(shell dirname "$(realpath $(lastword $(MAKEFILE_LIST)))")
PRETTIER_PATTERN='**/*.{css,js,jsx,less,ts,tsx}'

.DEFAULT_GOAL := help

.PHONY: prettierfixer
prettierfixer: ## Fix JS & CSS code style
	npx prettier --write ${PRETTIER_PATTERN}

.PHONY: prettier
prettier: ## Check JS & CSS code style
	npx prettier --check ${PRETTIER_PATTERN}

.PHONY: cs
cs: ## Run all code inspection tools
	@make prettier

.PHONY: csf
csf: ## Run all code fixers
	@make prettierfixer

.PHONY: help
help: ## Show this help
	@grep -E '^[\sa-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
