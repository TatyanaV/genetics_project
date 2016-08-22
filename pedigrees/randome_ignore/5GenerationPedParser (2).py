with open("5GenerationPed1.txt", "r") as filestream:
    with open("5GenerationPed1Parsed1.txt", "w") as filestreamtwo:
        for line in filestream:
            split_characters = line[0:].split(' ')
            line = line.replace('\n','')
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

