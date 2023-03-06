function calculateTotalCostPerCleaningProduct(productBrandChoice, quantity) {
  const cleaningProducts = [
    { productBrand: "Tide", productName: "Tide Tile Cleaner Extreme", price: 320.62 },
    { productBrand: "Surf", productName: "Surf Total Bleach S", price: 299.5 },
    { productBrand: "Mr. Clean", productName: "Mr. Clean Sink Disinfectant", price: 144.25 },
    { productBrand: "Ariel", productName: "Ariel Swipe Clean Solution", price: 372.00 },
    { productBrand: "Brasso", productName: "Brasso All Purpose Cleaning Solution" , price: 431.75 },
    { productBrand: "Domex", productName: "Domex Home Cleaning Solutions", price: 346.15 },
    { productBrand: "Mr. Muscle", productName: "Mr Muscle Sparkle Liquid", price: 280.60 },
    { productBrand: "Lysol", productName: "Lysol Kitchen Liquid Detergent", price: 384.12 }
  ];

  let totalCost;

  switch (productBrandChoice) {
    case "Tide":
    case "tide":
        totalCost = quantity * cleaningProducts[0].price;
        break;
    case "Surf":
    case "surf":
        totalCost = quantity * cleaningProducts[1].price;
        break;
    case "Mr. Clean":
    case "mr. clean":
        totalCost = quantity * cleaningProducts[2].price;
        break;
    case "Ariel":
    case "ariel":
        totalCost = quantity * cleaningProducts[3].price;
        break;
    case "Brasso":
    case "brasso":
        totalCost =  quantity * cleaningProducts[4].price;
        break;
    case "Domex":
    case "domex":
        totalCost =  quantity * cleaningProducts[5].price;
        break;
    case "Mr. Muscle":
    case "mr. muscle":
        totalCost =  quantity * cleaningProducts[6].price;
        break;
    case "Lysol":
    case "lysol":
        totalCost =  quantity * cleaningProducts[7].price;
        break;
    default:
        console.log("Hey! This is not a valid home cleaning product brand name.");
        break;
  }

  return totalCost;
}

function getBrand() {
    const brandName = window.prompt("Enter a house cleaning brand: ");
    return brandName;
}

function getQuantity() {
    const item_quantity = Number(window.prompt("Enter the quantity of your chosen brand: "));
    return item_quantity;
}

function displayTotalCost() {
    const brand = getBrand();
    const quantity = getQuantity();
    const totalCost = totalCostPerCleaningProduct(brand, quantity);

    console.log(`The total cost of buying ${quantity} units of ${brand} is \u20B1${totalCost}`);
}

function filterCleaningProductsBySurface(surfaceType) {
    const cleaningProducts = [
        { productBrand: "Tide", productName: "Tide Tile Cleaner Extreme", surface: "tiles" },
        { productBrand: "Surf", productName: "Surf Total Bleach S", surface: "wood" },
        { productBrand: "Mr. Clean", productName: "Mr. Clean Sink Disinfectant", surface: "wood" },
        { productBrand: "Ariel", productName: "Ariel Swipe Clean Solution", surface: "glass" },
        { productBrand: "Brasso", productName: "Brasso All Purpose Cleaning Solution" , surface: "glass" },
        { productBrand: "Domex", productName: "Domex Home Cleaning Solutions", surface: "wood" },
        { productBrand: "Mr. Muscle", productName: "Mr Muscle Sparkle Liquid", surface: "glass" },
        { productBrand: "Lysol", productName: "Lysol Kitchen Liquid Detergent", surface: "tiles" }
    ];
    
    let matchedSurfaceCleaningProducts = [];

    for (let index = 0; index <= (cleaningProducts.length - 1); index++) {
        if (surfaceType === cleaningProducts[index].surface) {
            matchedSurfaceCleaningProducts.push(cleaningProducts[index].productName);
        }
    }

    return matchedSurfaceCleaningProducts;
}

function displayCompatibleCleaningProducts() {
    const surface = window.prompt("Enter the type of surface: ");
    const compatibleProductsList = filterCleaningProductsBySurface(surface);

    console.log("Here's a list of cleaning products compatible with " + surface + ": ");
    compatibleProductsList.forEach(element => {
        console.log(`* ${element}`);
    });
}

function assignTasksToCleaningStaff() {
    const cleaningStaff = [
        { 
            name: "Ben", 
            availability: "TTHS", 
            cleaningEquipment: [
                "furniture polish", 
                "microfiber cloths", 
                "gloves"
            ],

            assignedTasks: []
        }, 
        { 
            name: "Eric", 
            availability: "MWF",
            cleaningEquipment: [
                "toilet bowl cleaner", 
                "toilet brush", 
                "face mask"
            ],
            
            assignedTasks: []
        }, 
        { 
            name: "Rachelle", 
            availability: "MWF",
            cleaningEquipment: [
                "furniture polish", 
                "microfiber cloths", 
                "gloves"
            ],

            assignedTasks: []
        }, 
        { 
            name: "Catherine", 
            availability: "TTHS",
            cleaningEquipment: [
                "toilet bowl cleaner", 
                "toilet brush", 
                "face mask"
            ],

            assignedTasks: []
        }, 
        { 
            name: "Jerry", 
            availability: "TTHS",
            cleaningEquipment: [
                "degreaser", 
                "sponge", 
                "protective eyeware"
            ],
            
            assignedTasks: []
        }, 
        { 
            name: "Patrick", 
            availability: "MWF",
            cleaningEquipment: [
                "furniture polish", 
                "microfiber cloths", 
                "gloves"
            ],
            
            assignedTasks: []
        },
        { 
            name: "James", 
            availability: "MWF",
            cleaningEquipment: [
                "toilet bowl cleaner", 
                "toilet brush", 
                "face mask"
            ],
            
            assignedTasks: []
        }, 
        { 
            name: "Elmer", 
            availability: "TTHS",
            cleaningEquipment: [
                "furniture polish", 
                "microfiber cloths", 
                "gloves"
            ],
            
            assignedTasks: []
        }, 
        { 
            name: "Malorie", 
            availability: "TTHS",
            cleaningEquipment: [
                "degreaser", 
                "sponge", 
                "protective eyeware"
            ],
            
            assignedTasks: []
        },
        { 
            name: "Anna", 
            availability: "TTHS",
            cleaningEquipment: [
                "toilet bowl cleaner", 
                "toilet brush", 
                "face mask"
            ],
            
            assignedTasks: []
        }, 
        { 
            name: "Albert", 
            availability: "MWF",
            cleaningEquipment: [
                "degreaser", 
                "sponge", 
                "protective eyeware"
            ],
            
            assignedTasks: []
        }, 
        { 
            name: "Sarah", 
            availability: "MWF", 
            cleaningEquipment: [
                "degreaser", 
                "sponge", 
                "protective eyeware"
            ],

            assignedTasks: []
        }
    ];

    const cleaningTasks = [
        {
            roomType: "Bathroom",
            dayOfExecution: "Saturday",
            requiredEquipment: [
                "toilet bowl cleaner", 
                "toilet brush", 
                "face mask"
            ]
        }, 
        { 
            roomType: "Kitchen",
            dayOfExecution: "Monday",
            requiredEquipment: [ 
                "degreaser", 
                "sponge", 
                "protective eyeware"
            ] 
        }, 
        { 
            roomType: "Living Room",
            dayOfExecution: "Friday",
            requiredEquipment: [
                "furniture polish", 
                "microfiber cloths", 
                "gloves"
            ] 
        },
        {
            roomType: "Bathroom",
            dayOfExecution: "Tuesday",
            requiredEquipment: [
                "toilet bowl cleaner", 
                "toilet brush", 
                "face mask"
            ]
        },
        { 
            roomType: "Kitchen",
            dayOfExecution: "Wednesday",
            requiredEquipment: [ 
                "degreaser", 
                "sponge", 
                "protective eyeware"
            ] 
        },
        { 
            roomType: "Living Room",
            dayOfExecution: "Thursday",
            requiredEquipment: [
                "furniture polish", 
                "microfiber cloths", 
                "gloves"
            ] 
        },
        {
            roomType: "Bathroom",
            dayOfExecution: "Friday",
            requiredEquipment: [
                "toilet bowl cleaner", 
                "toilet brush", 
                "face mask"
            ]
        },
        {
            roomType: "Bathroom",
            dayOfExecution: "Wednesday",
            requiredEquipment: [
                "toilet bowl cleaner", 
                "toilet brush", 
                "face mask"
            ]
        },
        { 
            roomType: "Kitchen",
            dayOfExecution: "Tuesday",
            requiredEquipment: [ 
                "degreaser", 
                "sponge", 
                "protective eyeware"
            ] 
        }
    ];

    for (let index = 0; index < cleaningStaff.length; index++) {
        if (cleaningStaff[index].availability === "MWF") {
            for (let counter = 0; counter < cleaningTasks.length; counter++) {
                if (cleaningTasks[counter].dayOfExecution === "Monday") {
                    let match = 0;
                    for (let i = 0; i < cleaningStaff[index].cleaningEquipment.length; i++) {
                        if (cleaningStaff[index].cleaningEquipment[i] === cleaningTasks[counter].requiredEquipment[i]) {
                            match += 1;
                        }                 
                    }

                    if (match === 3) {
                        cleaningStaff[index].assignedTasks.push(cleaningTasks[counter]);
                    }
                }

                if (cleaningTasks[counter].dayOfExecution === "Wednesday") {
                    let match = 0;
                    for (let i = 0; i < cleaningStaff[index].cleaningEquipment.length; i++) {
                        if (cleaningStaff[index].cleaningEquipment[i] === cleaningTasks[counter].requiredEquipment[i]) {
                            match += 1;
                        }                 
                    }

                    if (match === 3) {
                        cleaningStaff[index].assignedTasks.push(cleaningTasks[counter]);
                    }
                }

                if (cleaningTasks[counter].dayOfExecution === "Friday") {
                    let match = 0;
                    for (let i = 0; i < cleaningStaff[index].cleaningEquipment.length; i++) {
                        if (cleaningStaff[index].cleaningEquipment[i] === cleaningTasks[counter].requiredEquipment[i]) {
                            match += 1;
                        }                 
                    }

                    if (match === 3) {
                        cleaningStaff[index].assignedTasks.push(cleaningTasks[counter]);
                    }
                }
            }
        }

        if (cleaningStaff[index].availability === "TTHS") {
            for (let counter = 0; counter < cleaningTasks.length; counter++) {
                if (cleaningTasks[counter].dayOfExecution === "Tuesday") {
                    let match = 0;
                    for (let i = 0; i < cleaningStaff[index].cleaningEquipment.length; i++) {
                        if (cleaningStaff[index].cleaningEquipment[i] === cleaningTasks[counter].requiredEquipment[i]) {
                            match += 1;
                        }                 
                    }

                    if (match === 3) {
                        cleaningStaff[index].assignedTasks.push(cleaningTasks[counter]);
                    }
                }

                if (cleaningTasks[counter].dayOfExecution === "Thursday") {
                    let match = 0;
                    for (let i = 0; i < cleaningStaff[index].cleaningEquipment.length; i++) {
                        if (cleaningStaff[index].cleaningEquipment[i] === cleaningTasks[counter].requiredEquipment[i]) {
                            match += 1;
                        }                 
                    }

                    if (match === 3) {
                        cleaningStaff[index].assignedTasks.push(cleaningTasks[counter]);
                    }
                }

                if (cleaningTasks[counter].dayOfExecution === "Saturday") {
                    let match = 0;
                    for (let i = 0; i < cleaningStaff[index].cleaningEquipment.length; i++) {
                        if (cleaningStaff[index].cleaningEquipment[i] === cleaningTasks[counter].requiredEquipment[i]) {
                            match += 1;
                        }                 
                    }

                    if (match === 3) {
                        cleaningStaff[index].assignedTasks.push(cleaningTasks[counter]);
                    }
                }
            }
        }
    }

    for (const staff of cleaningStaff) {
        console.log(staff);
    }

    return cleaningStaff;
}

function displaySingleWeekSchedule(cleaningPersonnelList) {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday",
                        "Friday", "Saturday", "Sunday"];

    for (let i = 0; i < daysOfWeek.length; i++) {
        console.log(daysOfWeek[i]);
        console.log("Cleaning Personnel:")
        for (let index = 0; index < cleaningPersonnelList.length; index++) {
            let match = 0;
    
            for (let counter = 0; counter < cleaningPersonnelList[index].assignedTasks.length; counter++) {
                if (cleaningPersonnelList[index].assignedTasks[counter].dayOfExecution === daysOfWeek[i]) {
                    match += 1;
                }
            }
    
            if (match > 0) {
                console.log("\t" + cleaningPersonnelList[index].name);
            }
        }
        console.log("\n");
    }
}


