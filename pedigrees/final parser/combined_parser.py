with open("4GenerationPed1.txt", "r") as filestream:
    with open("4GenerationPed1Parsed1.txt", "w") as filestreamtwo:
        for line in filestream:
            split_characters = line[0:].split(' ')
            famid  = str(split_characters [0])
            id  = str(split_characters [4])
            momid  = str(split_characters [2])
            dadid  = str(split_characters [3])
            degree_affection = str(split_characters [1])
            age  = str(split_characters [5])
            proband = str(split_characters [14])
            female  = str(split_characters [6])
            geno  = str(split_characters [9])
            x = str(split_characters [15])
            y = str(split_characters [16])
            line2 =  famid + ' '+ id + ' ' + momid + ' ' + dadid + ' ' + degree_affection + ' ' + age + ' ' + proband + ' '  + female + ' ' + geno + ' ' + x + ' ' + y
            filestreamtwo.write(line2)

output = "4GenerationPed1Parsed2.txt"
file_name = "4GenerationPed1parsed1.txt"
string_to_add = "'?' '/' '?' 'black' 'black' '10' 'white'"

with open(file_name, 'r') as f:
    file_lines = [' '.join([x.strip(), string_to_add, '\n']) for x in f.readlines()]


with open(file_name, 'w') as f:
    line5 = "famid id momid dadid affection age proband female genotype x y textMaleGene1 textMaleDash textMaleGene2 textMaleGene1Color textMaleGene2Color textMaleIdentifier maleFillColor"
    f.write(line5)
    f.write("\n")
    f.writelines(file_lines) 
	
with open("4GenerationPed1parsed1.txt", "r") as filestream:
    _unused = filestream.next()
    with open("4GenerationPed1parsed2.txt", "w") as filestreamtwo:
        for line in filestream:
            split_characters = line[1:].split(' ')
            check_females = int(split_characters [7]);
            check_relationship0 = str(split_characters [1]);
            check_relationship = str(split_characters [2]);
            check_relationship1 = str(split_characters [3]);
            check_relationship2 = str(split_characters [9]);
            check_relationship3 = str(split_characters [10]);
            line.rstrip()
            line = line.replace(' ', ',')
            line = line.replace('\n','')
            if check_females == 1:
              line = "femaleArray.push(new Females2(" + line[:-1] + "))" + ";" + "\n"

            else:
              line = "malesArray.push(new Males2(" + line[:-1] + "))" + ";" + "\n"
            line2 = "arrayRelationship.push(new Relationship2(" + str(check_relationship0) +','+ str(check_relationship) +','+ str(check_relationship1) + ','+ str(check_females) + ',' + str(check_relationship2) + ','+ str(check_relationship3) + "))"+ ";" + "\n"
            #currentline = line.split(",")
            #total = str(int(currentline[0]) + int(currentline[1]) + int(currentline [2])) + "\n"
            filestreamtwo.write(line)
            filestreamtwo.write(line2)					