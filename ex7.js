class JavaScriptExercise {
    exercise = [];
    constructor(exercise){
        this.exercise = exercise;
    }
    addExercise(exercise) {
        this.exercise.push(exercise);
    }
    removeExercise (exerciseToRemove) {
        this.exercise = this.exercise.filter(exercise => exercise !== exerciseToRemove);
    }
    getExercises(){
        return this.exercise;
    }
}

class Exercise {
    id = "";
    title = "";
    description = "";
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    toString() {
        return `Exercise [id = ${this.id},
        title = ${this.title},
    description = ${this.description}]`;
    }
}

class CodingExercise {
    language = "";
    codeSnippet = "";
    constructor(language, codeSnippet) {
        this.language = language;
        this.codeSnippet = codeSnippet;
    }
    getLanguage() {
        return this.language;
    }
    getCodeSnippet() {
        return this.codeSnippet;
    }
    toString() {
        return `CodeExercise [language = ${this.language},
        codeSnippet = ${this.codeSnippet}]`;
    }
}

const main = () => {
 const exercise1 = new Exercise ("Ex001","Hospital", "Medical, Healing, Health, Care, Clinic" );
 const codingExersice1  = new CodingExercise ("c#", "c# make to my by id ..... .....")

 console.log(exercise1.toString());
 console.log(codingExersice1.toString());
}

main();