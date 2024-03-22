const enum Rules{
    EMAIL= 'email',
    PHONE_NUMBER='phone_number',
}

const ValidationRegexRules:Map<string, RegExp> = new Map();

ValidationRegexRules.set(Rules.EMAIL, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
ValidationRegexRules.set(Rules.PHONE_NUMBER,/^(?:\+?40|0)\s?7[0-9]{8}$/);

export { ValidationRegexRules, Rules };