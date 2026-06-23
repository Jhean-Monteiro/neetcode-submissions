class Solution {

    groupAnagrams(strs: string[]): string[][] {
        // cria um Map onde a chave será a string ordenada (ex: act)
        // e o valor será um array com os anagramas originais (ex: ["cat", "act"])
        const anagramMap = new Map<string, string[]>();

        for (const str of strs) {
            // pra criar a chave, transforma a string em array de caracteres.
            // ordena alfabeticamente e junta de volta em uma string
            // exemplo: "cat" -> ["c", "a", "t"] -> ["a", "c", "t"] -> "act"
            const sortedKey = str.split('').sort().join('');

            // se essa chave ainda não existir no map, inicializa com um array vazio
            if (!anagramMap.has(sortedKey)) {
                anagramMap.set(sortedKey, []);
            }

            // busca o array associado a chave e adicionamos a palavra original
            anagramMap.get(sortedKey)!.push(str);
        }

        // converte todos os valores acumulados no Map em um array de arrays
        // [["","",""], ["",""], [""], ["",""]]
        return Array.from(anagramMap.values())
    }
}

const sol = new Solution();

const input = ["act", "pots", "tops", "cat", "stop", "hat"];

const output = sol.groupAnagrams(input);

console.log(JSON.stringify(output));