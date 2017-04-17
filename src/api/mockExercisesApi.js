import delay from './delay';

const exercises = [
    {
        name: 'Pushups',
        id: 'pushups11488388975927'
    },
    {
        name: 'Planks',
        id: 'planks1488389103156'
    },
    {
        name: 'Squats',
        id: 'squats1488389106923'
    }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (exercise) => {
    return exercise.name.replace(' ', '').toLowercase() + Date.now();
};

class ExerciseApi {
    static getAllExercises() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], exercises));
            }, delay);
        });
    }

    static saveExercise(exercise) {
        exercise = Object.assign({}, exercise); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if(!exercise.name) {
                    reject('exercise must have a name');
                }

                if (exercise.id) {
                    const existingExerciseIndex = exercises.findIndex(w => w.id == exercise.id);
                    exercises.splice(existingExerciseIndex, 1, exercise);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids for new authors in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    exercise.id = generateId(exercise);
                    exercises.push(exercise);
                }

                resolve(exercise);
            }, delay);
        });
    }

    static deleteExercise(exerciseId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfWokroutToDelete = exercises.findIndex(exercise => {
                    exercise.id == exerciseId;
                });
                try {
                    exercises.splice(indexOfWokroutToDelete, 1);
                } catch(e) {
                    reject(`exercise with id ${exerciseId} not found`);
                }

                resolve();
            }, delay);
        });
    }
}

export default ExerciseApi;
