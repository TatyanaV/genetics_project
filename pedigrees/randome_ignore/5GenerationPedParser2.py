output = "5GenerationPed1Parsed2.txt"
file_name = "5GenerationPed1parsed1.txt"
string_to_add = "'?' '/' '?' 'black' 'black' '10' 'white'"

with open(file_name, 'r') as f:
    file_lines = [' '.join([x.strip(), string_to_add, '\n']) for x in f.readlines()]

with open(file_name, 'w') as f:
    line5 = "famid id momid dadid affection age proband female genotype x y textMaleGene1 textMaleDash textMaleGene2 textMaleGene1Color textMaleGene2Color textMaleIdentifier maleFillColor"
    f.write(line5)
    f.write("\n")
    f.writelines(file_lines) 