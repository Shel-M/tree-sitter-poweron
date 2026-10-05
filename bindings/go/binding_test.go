package tree_sitter_tree_sitter_poweron_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_tree_sitter_poweron "gitea@repo.partnercoloradocu.org:sheldonm/tree-sitter-poweron.git/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_tree_sitter_poweron.Language())
	if language == nil {
		t.Errorf("Error loading TreeSitterPowerOn grammar")
	}
}
