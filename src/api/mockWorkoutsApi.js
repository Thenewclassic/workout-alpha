import delay from './delay';

const workouts = [
    {
        name: 'ab blaster',
        id: 'abblaster11488388975927',
        exercises: []
    },
    {
        name: 'back buster',
        id: 'backbuster1488389103156',
        exercises: []
    },
    {
        name: 'calf cramper',
        id: 'calfcramper1488389106923',
        exercises: []
    }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (workout) => {
    return workout.name.replace(' ', '').toLowercase() + Date.now();
};

class WorkoutApi {
    static getAllWorkouts() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], workouts));
            }, delay);
        });
    }

    static saveWorkout(workout) {
        workout = Object.assign({}, workout); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if(!workout.name) {
                    reject('workout must have a name');
                }

                if (workout.id) {
                    const existingWorkoutIndex = workouts.findIndex(w => w.id == workout.id);
                    workouts.splice(existingWorkoutIndex, 1, workout);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids for new authors in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    workout.id = generateId(workout);
                    workouts.push(workout);
                }

                resolve(workout);
            }, delay);
        });
    }

    static deleteWorkout(workoutId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfWokroutToDelete = workouts.findIndex(workout => {
                    workout.id == workoutId;
                });
                try {
                    workouts.splice(indexOfWokroutToDelete, 1);
                } catch(e) {
                    reject(`workout with id ${workoutId} not found`);
                }

                resolve();
            }, delay);
        });
    }
}

export default WorkoutApi;
