#include "tree_sitter/parser.h"

enum TokenType { COMMENT };

static inline bool is_whitespace(int32_t c) {
    return c == ' ' || c == '\t' || c == '\n' || c == '\r' || c == '\f' || c == '\v';
}

void *tree_sitter_poweron_external_scanner_create(void) { return NULL; }
void tree_sitter_poweron_external_scanner_destroy(void *payload) {}
unsigned tree_sitter_poweron_external_scanner_serialize(void *payload, char *buffer) { return 0; }
void tree_sitter_poweron_external_scanner_deserialize(void *payload, const char *buffer, unsigned length) {}

bool tree_sitter_poweron_external_scanner_scan(void *payload, TSLexer *lexer, const bool *valid_symbols) {
    if (!valid_symbols[COMMENT]) return false;

    while (is_whitespace(lexer->lookahead)) {
        lexer->advance(lexer, true);
    }

    if (lexer->lookahead != '[') return false;

    int depth = 0;
    while (lexer->lookahead != 0) {
        if (lexer->lookahead == '[') {
            depth++;
        } else if (lexer->lookahead == ']') {
            depth--;
            lexer->advance(lexer, false);
            if (depth == 0) {
                lexer->result_symbol = COMMENT;
                return true;
            }
            continue;
        }
        lexer->advance(lexer, false);
    }
    return false;
}
