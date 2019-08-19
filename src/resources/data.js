const start1 = new Date("Mon Aug 19 2019 08:00:00 GMT-0700 (Pacific Daylight Time)");
const end1 = new Date("Mon Aug 19 2019 08:30:00 GMT-0700 (Pacific Daylight Time)");

const start2 = new Date("Mon Aug 19 2019 09:00:00 GMT-0700 (Pacific Daylight Time)");
const end2 = new Date("Mon Aug 19 2019 09:30:00 GMT-0700 (Pacific Daylight Time)");

const start3 = new Date("Tue Aug 20 2019 08:00:00 GMT-0700 (Pacific Daylight Time)");
const end3 = new Date("Tue Aug 20 2019 08:00:00 GMT-0700 (Pacific Daylight Time)");

export const profileData = {
    registeredPets: [{
        name: "neo",
        age: "4m",
        type: "dog",
        assignedVet: "sarah"
    },
    {
        name: "pistachio",
        age: "3w",
        type: "cat",
        assignedVet: "jake"
    },
    {
        name: "murph",
        age: "3w",
        type: "cat",
        assignedVet: "jake"
    }],
    registeredVeterinarians: [{
        name: "jake",
        age: "25",
        specialization: "cats",
        assignedPets: [
            "murph",
            "pistachio"
        ],
        upcomingAppointments: [ 1, 3 ]
    }, {
        name: "sarah",
        age: "22",
        specialization: "dogs",
        assignedPets: [
            "neo"
        ],
        upcomingAppointments: [
          2
        ]
    }],
    appointments: [{
        apptId: 1,
        time: "timestamp format",
        vet: "jake",
        pet: "murph",
        event: {
          title: "Jake and Murph",
          start: start1,
          end: end1
        }
    }, {
        apptId: 2,
        time: "timestamp format",
        vet: "sarah",
        pet: "neo",
        event: {
          title: "Sarah and Neo",
          start: start2,
          end: end2
        }
    }, {
        apptId: 3,
        time: "timestamp format",
        vet: "jake",
        pet: "pistachio",
        event: {
          title: "Jake and Pistachio",
          start: start3,
          end: end3
        }
    }]
};
