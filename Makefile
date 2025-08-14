ROOT_DIRECTORY = $(shell dirname "$(realpath $(lastword $(MAKEFILE_LIST)))")
PRETTIER_PATTERN='**/*.{css,js,jsx,less,ts,tsx}'

.DEFAULT_GOAL := help

.PHONY: help
help: ## Show this help
	@printf "\033[33mAvailable commands:\033[0m\n"
	@grep -E '^[\sa-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[32m%-25s\033[0m %s\n", $$1, $$2}'

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
