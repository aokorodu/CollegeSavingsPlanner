// DATA

// List of colleges with their average costs and colors
const collegeListFinal = [
  // {
  //   name: "Average in-state Community College",
  //   cost: 11723,
  //   colors: ["#555879", "#98A1BC"],
  // },
  // {
  //   name: "Average out-of-state Community College",
  //   cost: 15818,
  //   colors: ["#555879", "#98A1BC"],
  // },
  {
    name: "Average in-state Public College",
    cost: 24920,
    colors: ["#555879", "#98A1BC"],
  },
  {
    name: "Average out-of-state Public College",
    cost: 44090,
    colors: ["#555879", "#98A1BC"],
  },
  {
    name: "Average Private College - Average",
    cost: 58600,
    colors: ["#555879", "#98A1BC"],
  },
  {
    name: "Average Private College - Expensive",
    cost: 70731,
    colors: ["#555879", "#98A1BC"],
  },
  {
    name: "Albright College",
    cost: 42748,
    colors: ["#E81727", "#000000"],
  },
  {
    name: "Allegheny College",
    cost: 68756,
    colors: ["#003057", "#FFD100"],
  },
  {
    name: "Alvernia University",
    cost: 57900,
    colors: ["#7C2529", "#F2A900"],
  },
  {
    name: "Arcadia University",
    cost: 64540,
    colors: ["#B72F2F", "#000000"],
  },
  {
    name: "ASPIRA City College",
    cost: 12147,
    colors: ["#0033A0", "#FFD100"],
  },
  {
    name: "Aviation Institute of Maintenance-Philadelphia",
    cost: 16757,
    colors: ["#16325B", "#FBB040"],
  },
  {
    name: "Bryn Athyn College of the New Church",
    cost: 41655,
    colors: ["#1C3261", "#F5B335"],
  },
  {
    name: "Bryn Mawr College",
    cost: 81250,
    colors: ["#FFD200", "#002663"],
  },
  {
    name: "Bucknell University",
    cost: 80890,
    colors: ["#FF5D15", "#002147"],
  },
  {
    name: "Bucks County Community College",
    cost: 9221,
    colors: ["#1B365D", "#60A3D9"],
  },
  {
    name: "Butler County Community College",
    cost: 8700,
    colors: ["#00519E", "#F6B221"],
  },
  {
    name: "Cabrini University",
    cost: 50215,
    colors: ["#003E7E", "#FFFFFF"],
  },
  {
    name: "Cairn University-Langhorne",
    cost: 44859,
    colors: ["#990000", "#1A1A1A"],
  },
  {
    name: "Carlow University",
    cost: 47908,
    colors: ["#822263", "#E4B55F"],
  },
  {
    name: "Carnegie Mellon University",
    cost: 81297,
    colors: ["#CC0000", "#000000"],
  },
  {
    name: "Cedar Crest College",
    cost: 57935,
    colors: ["#FFC72C", "#000000"],
  },
  {
    name: "Central Penn College",
    cost: 26820,
    colors: ["#761232", "#FDCE09"],
  },
  {
    name: "Chatham University",
    cost: 58134,
    colors: ["#FFFFFF", "#533A7C"],
  },
  {
    name: "Chestnut Hill College",
    cost: 51710,
    colors: ["#CE2340", "#FFFFFF"],
  },
  {
    name: "Cheyney University of Pennsylvania",
    cost: 21920,
    colors: ["#0066B3", "#8C1D40"],
  },
  {
    name: "Clarks Summit University",
    cost: 40000,
    colors: ["#2251A7", "#FFFFFF"],
  },
  {
    name: "Commonwealth Technical Institute",
    cost: 16742,
    colors: ["blue", "gold"],
  },
  {
    name: "Commonwealth University of Pennsylvania",
    cost: 22152,
    colors: ["#7A0019", "#F7D117"],
  },
  {
    name: "Community College of Allegheny County",
    cost: 8803,
    colors: ["#0066CC", "#FFD100"],
  },
  {
    name: "Community College of Beaver County",
    cost: 13680,
    colors: ["#00386B", "#FFD600"],
  },
  {
    name: "Community College of Philadelphia",
    cost: 8688,
    colors: ["#FFD100", "#000000"],
  },
  {
    name: "Curtis Institute of Music",
    cost: 26653,
    colors: ["#89212F"],
  },
  {
    name: "Delaware County Community College",
    cost: 10800,
    colors: ["#003366", "#FFC72C"],
  },
  {
    name: "Delaware Valley University",
    cost: 58050,
    colors: ["#006838", "#FFD100"],
  },
  {
    name: "DeSales University",
    cost: 58600,
    colors: ["#005CB9", "#E11F26", "#FFD100"],
  },
  {
    name: "Dickinson College",
    cost: 79975,
    colors: ["#E41C38", "#A7A8AA"],
  },
  {
    name: "Douglas Education Center",
    cost: 18950,
    colors: [],
  },
  {
    name: "Drexel University",
    cost: 78213,
    colors: ["#07294D", "#FFD100"],
  },
  {
    name: "Duquesne University",
    cost: 62766,
    colors: ["#001641", "#E51636"],
  },
  {
    name: "East Stroudsburg University of Pennsylvania",
    cost: 22190,
    colors: ["#B5121B", "#231F20"],
  },
  {
    name: "Eastern University",
    cost: 50588,
    colors: ["#8A1538", "#231F20"],
  },
  {
    name: "Elizabethtown College",
    cost: 49796,
    colors: ["#084785", "#E9A949"],
  },
  {
    name: "Erie Institute of Technology Inc",
    cost: 15768,
    colors: [],
  },
  {
    name: "Falcon Institute of Health and Science",
    cost: 27140,
    colors: [],
  },
  {
    name: "Fortis Institute-Forty Fort",
    cost: 13955,
    colors: [],
  },
  {
    name: "Fortis Institute-Scranton",
    cost: 14444,
    colors: [],
  },
  {
    name: "Franklin and Marshall College",
    cost: 83948,
    colors: ["#09519F", "#FFFFFF"],
  },
  {
    name: "Gannon University",
    cost: 53561,
    colors: ["#862633", "#FDB913"],
  },
  {
    name: "Geisinger Commonwealth School of Medicine",
    cost: 11131,
    colors: ["#0075C1", "#005191"],
  },
  {
    name: "Geneva College",
    cost: 44590,
    colors: ["#B59A54", "#231F20"],
  },
  {
    name: "Gettysburg College",
    cost: 79760,
    colors: ["#002F87", "#FF5F00"],
  },
  {
    name: "Gwynedd Mercy University",
    cost: 52452,
    colors: ["#A6192E", "#F9D342"],
  },
  {
    name: "Harcum College",
    cost: 41500,
    colors: ["#6D2077", "#A7A8AA"],
  },
  {
    name: "Harrisburg Area Community College",
    cost: 8918,
    colors: ["#00843D", "#231F20"],
  },
  {
    name: "Harrisburg University of Science and Technology",
    cost: 33800,
    colors: ["#B6BAA8", "#567A44"],
  },
  {
    name: "Haverford College",
    cost: 87180,
    colors: ["#990000", "#222222"],
  },
  {
    name: "Heritage Valley Health System School of Nursing",
    cost: 22100,
    colors: [],
  },
  {
    name: "Holy Family University",
    cost: 48662,
    colors: ["#003865", "#FFC709"],
  },
  {
    name: "Immaculata University",
    cost: 41420,
    colors: ["#0082A3", "#86BC25"],
  },
  {
    name: "Indiana University of Pennsylvania-Main Campus",
    cost: 24182,
    colors: ["#990000", "#888888"],
  },
  {
    name: "Jna Institute of Culinary Arts",
    cost: 14575,
    colors: [],
  },
  {
    name: "Johnson College",
    cost: 20733,
    colors: ["#2F3338", "#00B1E6"],
  },
  {
    name: "Juniata College",
    cost: 69948,
    colors: ["#004476", "#DEB887"],
  },
  {
    name: "Keystone College",
    cost: 30250,
    colors: ["#F59C13", "#21336B"],
  },
  {
    name: "King's College",
    cost: 57686,
    colors: ["#C8102E", "#231F20"],
  },
  {
    name: "Kutztown University of Pennsylvania",
    cost: 24346,
    colors: ["#7A0019", "#F7D117"],
  },
  {
    name: "La Roche University",
    cost: 46388,
    colors: ["#EE243C", "#1C1C1C"],
  },
  {
    name: "La Salle University",
    cost: 51160,
    colors: ["#002664", "#FFC72C"],
  },
  {
    name: "Lackawanna College",
    cost: 30060,
    colors: ["#13294B", "#009BDF"],
  },
  {
    name: "Lafayette College",
    cost: 81214,
    colors: ["#7C2837", "#877F6C"],
  },
  {
    name: "Lancaster Bible College",
    cost: 41630,
    colors: ["#B20019", "#000000"],
  },
  {
    name: "Lansdale School of Business",
    cost: 11850,
    colors: ["#002B5C", "#FFFFFF"],
  },
  {
    name: "Laurel Business Institute",
    cost: 11470,
    colors: [],
  },
  {
    name: "Laurel Technical Institute",
    cost: 11470,
    colors: [],
  },
  {
    name: "Lebanon Valley College",
    cost: 65660,
    colors: ["#002663", "#FDBB30"],
  },
  {
    name: "Lehigh Carbon Community College",
    cost: 9210,
    colors: ["#793100", "#FED600"],
  },
  {
    name: "Lehigh University",
    cost: 78650,
    colors: ["#653819", "#FFFFFF"],
  },
  {
    name: "Lincoln University",
    cost: 23572,
    colors: ["#191970", "#F47D20"],
  },
  {
    name: "Luzerne County Community College",
    cost: 11130,
    colors: [],
  },
  {
    name: "Lycoming College",
    cost: 62287,
    colors: ["#002B5C", "#FDB927"],
  },
  {
    name: "Manor College",
    cost: 29852,
    colors: ["#0553A1", "#B6BD00"],
  },
  {
    name: "Marywood University",
    cost: 54670,
    colors: ["#17573F", "#CA9D40"],
  },
  {
    name: "Mercyhurst University",
    cost: 58784,
    colors: ["#17563A", "#8CD1D1"],
  },
  {
    name: "Messiah University",
    cost: 52550,
    colors: ["#22345D", "#A7A9AC"],
  },
  {
    name: "Millersville University of Pennsylvania",
    cost: 24862,
    colors: ["#FDB515", "#000000"],
  },
  {
    name: "Misericordia University",
    cost: 53796,
    colors: ["#104FA1", "#FEC300"],
  },
  {
    name: "Montgomery County Community College",
    cost: 11250,
    colors: ["#781214", "#1E325A"],
  },
  {
    name: "Moore College of Art and Design",
    cost: 69035,
    colors: ["#1C3F94", "#F65390"],
  },
  {
    name: "Moravian University",
    cost: 67351,
    colors: ["#003366", "#FFD700"],
  },
  {
    name: "Mount Aloysius College",
    cost: 38350,
    colors: ["#003366", "#84929B"],
  },
  {
    name: "Muhlenberg College",
    cost: 74195,
    colors: ["#8C1D40", "#C1B497"],
  },
  {
    name: "Neumann University",
    cost: 52980,
    colors: ["#003366", "#FFC72C"],
  },
  {
    name: "Northampton County Area Community College",
    cost: 21548,
    colors: ["#164194", "#E49A0B"],
  },
  {
    name: "Peirce College",
    cost: 15060,
    colors: ["#003B5C", "#A5ACAF"],
  },
  {
    name: "Penn Commercial Business/Technical School",
    cost: 13654,
    colors: [],
  },
  {
    name: "Pennsylvania Academy of the Fine Arts",
    cost: 63262,
    colors: ["#C13E22", "#191919"],
  },
  {
    name: "Pennsylvania College of Art and Design",
    cost: 43905,
    colors: ["#2E4E92", "#E85B88"],
  },
  {
    name: "Pennsylvania College of Health Sciences",
    cost: 31866,
    colors: [],
  },
  {
    name: "Pennsylvania College of Technology",
    cost: 30254,
    colors: ["#B1B3B6", "#000000"],
  },
  {
    name: "Pennsylvania Highlands Community College",
    cost: 9360,
    colors: [],
  },
  {
    name: "Pennsylvania Institute of Technology",
    cost: 14445,
    colors: [],
  },
  {
    name: "Pennsylvania State University-Main Campus",
    cost: 33264,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State Abington",
    cost: 27152,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State Altoona",
    cost: 29764,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State Beaver",
    cost: 27232,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State Berks",
    cost: 30176,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State Brandywine",
    cost: 29000,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State DuBois",
    cost: 14380,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State Erie-Behrend College",
    cost: 30718,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State Fayette- Eberly",
    cost: 14380,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State Greater Allegheny",
    cost: 26402,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State Harrisburg",
    cost: 31814,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State Hazleton",
    cost: 27202,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State Lehigh Valley",
    cost: 15180,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State Mont Alto",
    cost: 26402,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State New Kensington",
    cost: 14380,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State Schuylkill",
    cost: 23890,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State Scranton",
    cost: 15180,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State Shenango",
    cost: 14002,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State Wilkes-Barre",
    cost: 14258,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-Penn State York",
    cost: 15180,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania State University-World Campus",
    cost: 15204,
    colors: ["#1E407C", "#FFFFFF"],
  },
  {
    name: "Pennsylvania Western University",
    cost: 24588,
    colors: ["#A61123", "#636466"],
  },
  {
    name: "Pittsburgh Institute of Aeronautics",
    cost: 17725,
    colors: [],
  },
  {
    name: "Pittsburgh Technical College",
    cost: 31375,
    colors: [],
  },
  {
    name: "Point Park University",
    cost: 50640,
    colors: ["#057938", "#000000"],
  },
  {
    name: "Reading Area Community College",
    cost: 10890,
    colors: [],
  },
  {
    name: "Reading Hospital School of Health Sciences",
    cost: 21852,
    colors: [],
  },
  {
    name: "Robert Morris University",
    cost: 47870,
    colors: ["#002D62", "#C8102E", "#FFFFFF"],
  },
  {
    name: "Rosedale Technical College",
    cost: 16700,
    colors: [],
  },
  {
    name: "Rosemont College",
    cost: 35701,
    colors: ["#5A2678", "#A699A0"],
  },
  {
    name: "Saint Charles Borromeo Seminary-Overbrook",
    cost: 41136,
    colors: [],
  },
  {
    name: "Saint Francis University",
    cost: 55600,
    colors: ["#C8102E", "#000000"],
  },
  {
    name: "Saint Joseph's University",
    cost: 67080,
    colors: ["#9e1b32", "#6c6f70"],
  },
  {
    name: "Saint Vincent College",
    cost: 55018,
    colors: ["#234584", "#FFD600"],
  },
  {
    name: "Seton Hill University",
    cost: 55192,
    colors: ["#BA1848", "#F5F1E7"],
  },
  {
    name: "Shippensburg University of Pennsylvania",
    cost: 26496,
    colors: ["#002F6C", "#C8102E"],
  },
  {
    name: "Slippery Rock University of Pennsylvania",
    cost: 21091,
    colors: ["#057B5A", "#417F4B"],
  },
  {
    name: "South Hills School of Business & Technology",
    cost: 19208,
    colors: [],
  },
  {
    name: "Strayer University-Pennsylvania",
    cost: 13920,
    colors: [],
  },
  {
    name: "Studio Incamminati",
    cost: 17333,
    colors: [],
  },
  {
    name: "Susquehanna University",
    cost: 73100,
    colors: ["#D9822B", "#570A31"],
  },
  {
    name: "Swarthmore College",
    cost: 81376,
    colors: ["#770000", "#A9A9A9"],
  },
  {
    name: "Talmudical Yeshiva of Philadelphia",
    cost: 19680,
    colors: [],
  },
  {
    name: "Temple University",
    cost: 39050,
    colors: ["#990000", "#FFFFFF"],
  },
  {
    name: "Thaddeus Stevens College of Technology",
    cost: 19720,
    colors: [],
  },
  {
    name: "Thiel College",
    cost: 51714,
    colors: [],
  },
  {
    name: "Thomas Jefferson University",
    cost: 62929,
    colors: ["#232D4B", "#F9B233"],
  },
  {
    name: "Triangle Tech Inc-Bethlehem",
    cost: 18593,
    colors: [],
  },
  {
    name: "Triangle Tech Inc-Dubois",
    cost: 18575,
    colors: [],
  },
  {
    name: "Triangle Tech Inc-Greensburg",
    cost: 18513,
    colors: [],
  },
  {
    name: "Triangle Tech Inc-Pittsburgh",
    cost: 18538,
    colors: [],
  },
  {
    name: "Triangle Tech Inc-Sunbury",
    cost: 18700,
    colors: [],
  },
  {
    name: "Triangle Tech-Chambersburg",
    cost: 18961,
    colors: [],
  },
  {
    name: "University of Pennsylvania",
    cost: 84600,
    colors: ["#011F5B", "#990000"],
  },
  {
    name: "University of Pittsburgh-Bradford",
    cost: 25468,
    colors: ["#003594", "#FFB81C"],
  },
  {
    name: "University of Pittsburgh-Greensburg",
    cost: 27120,
    colors: ["#003594", "#FFB81C"],
  },
  {
    name: "University of Pittsburgh-Johnstown",
    cost: 26936,
    colors: ["#003594", "#FFB81C"],
  },
  {
    name: "University of Pittsburgh-Pittsburgh Campus",
    cost: 34944,
    colors: ["#003594", "#FFB81C"],
  },
  {
    name: "University of Pittsburgh-Titusville",
    cost: 11918,
    colors: ["#003594", "#FFB81C"],
  },
  {
    name: "University of Scranton",
    cost: 69227,
    colors: ["#582C83", "#FFD100"],
  },
  {
    name: "University of the Arts",
    cost: 73318,
    colors: ["#C60C30", "#000000"],
  },
  {
    name: "University of Valley Forge",
    cost: 35920,
    colors: ["#14334F", "#FFFFFF"],
  },
  {
    name: "UPMC Jameson School of Nursing",
    cost: 15498,
    colors: ["#4D104A", "#C7B4E2"],
  },
  {
    name: "UPMC Mercy School of Nursing",
    cost: 23106,
    colors: ["#4D104A", "#C7B4E2"],
  },
  {
    name: "UPMC Shadyside School of Nursing",
    cost: 16190,
    colors: ["#4D104A", "#C7B4E2"],
  },
  {
    name: "UPMC St. Margaret School of Nursing",
    cost: 16190,
    colors: ["#4D104A", "#C7B4E2"],
  },
  {
    name: "Ursinus College",
    cost: 74260,
    colors: ["#E31837", "#FFC72C"],
  },
  {
    name: "Valley Forge Military College",
    cost: 49176,
    colors: [],
  },
  {
    name: "Vet Tech Institute",
    cost: 16920,
    colors: [],
  },
  {
    name: "Villanova University",
    cost: 81597,
    colors: ["#003366", "#7092BE"],
  },
  {
    name: "Walnut Hill College",
    cost: 35650,
    colors: [],
  },
  {
    name: "Washington & Jefferson College",
    cost: 42095,
    colors: ["#B61C34", "#000000"],
  },
  {
    name: "Waynesburg University",
    cost: 41760,
    colors: ["#FFB81C", "#231F20"],
  },
  {
    name: "West Chester University of Pennsylvania",
    cost: 23161,
    colors: ["#512D6D", "#FFD400"],
  },
  {
    name: "West Virginia Junior College-United Career Institute",
    cost: 14070,
    colors: [],
  },
  {
    name: "Western Pennsylvania Hospital School of Nursing",
    cost: 21636,
    colors: [],
  },
  {
    name: "Westminster College",
    cost: 51850,
    colors: ["#0066B3", "#A1C6EA"],
  },
  {
    name: "Westmoreland County Community College",
    cost: 10224,
    colors: [],
  },
  {
    name: "Widener University",
    cost: 69168,
    colors: ["#003366", "#FFD200"],
  },
  {
    name: "Wilkes University",
    cost: 58292,
    colors: [],
  },
  {
    name: "Williamson College of the Trades",
    cost: 35858,
    colors: [],
  },
  {
    name: "Wilson College",
    cost: 39162,
    colors: [],
  },
  {
    name: "Yeshivath Beth Moshe",
    cost: 14100,
    colors: [],
  },
  {
    name: "York College of Pennsylvania",
    cost: 37386,
    colors: [],
  },
];

const mostExpensiveCollege = collegeListFinal.reduce((max, college) =>
  college.cost > max.cost ? college : max
);
// console.log("Most expensive college:", mostExpensiveCollege);

// UI

// SLIDERS AND INPUTS
// years until college
const yearsSlider = document.getElementById("yearsSlider");
const yearsUntilText = document.getElementById("yearsUntilText");
// planned contribution
const plannedContributionSlider = document.getElementById(
  "plannedContributionSlider"
);
const plannedContributionText = document.getElementById(
  "plannedContributionText"
);
// rate of return
const ROfRSlider = document.getElementById("ROfRSlider");
const ROfRText = document.getElementById("ROfRText");
// annual cost increase
const annualCostIncreaseSlider = document.getElementById(
  "annualCostIncreaseSlider"
);
// cost increase
const costIncreaseText = document.getElementById("costIncreaseText");
// starting amount
const startingAmountInput = document.getElementById("startingAmountInput");

// college cost
const annualCollegeCostSlider = document.getElementById(
  "annualCollegeCostSlider"
);
const annualCollegeCostText = document.getElementById("annualCollegeCostText");
// college select
const collegeSelect = document.getElementById("collegeSelect");
const periodSelect = document.getElementById("periodSelect");

// summary text
const projectedSavings = document.getElementById("projectedSavings");
const projectedTotal = document.getElementById("projectedTotal");
const projectedPercentSaved = document.getElementById("projectedPercentSaved");
const fundingNeededText = document.getElementById("fundingNeededText");
const fundingNeededTitle = document.getElementById("fundingNeededTitle");
const extraFundingInstructions = document.getElementById(
  "extraFundingInstructions"
);
const fundsNeeded = document.querySelectorAll(".fundsNeeded");
// SVG paths for pie chart
const savedPath = document.getElementById("savedPath");
const overflowPath = document.getElementById("overflowPath");
const dividerPath = document.getElementById("dividerPath");
// SVG rects for bar graph
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const bar4 = document.getElementById("bar4");
const bars = [bar1, bar2, bar3, bar4];

const savingsBar1 = document.getElementById("savingsBar1");
const savingsBar2 = document.getElementById("savingsBar2");
const savingsBar3 = document.getElementById("savingsBar3");
const savingsBar4 = document.getElementById("savingsBar4");
const savingsBars = [savingsBar1, savingsBar2, savingsBar3, savingsBar4];
const savingsLine = document.getElementById("savingsLine");

// nav bar

const pieIcon = document.getElementById("pieIcon");
const barIcon = document.getElementById("barIcon");
const icons = document.querySelectorAll(".icon");

// bar chart text
const yaxisText = document.querySelectorAll(".yaxisText");

let yearsToCollege = 0;
let yearsOfCollege = 4;
let yearlyCost = 50000;
let yearlyCostByYear = [];
let yearlySavedByYear = [];
let maxYearlyCollegeCost = 0;
let monthlyContribution = 500;
let initialBalance = 2000;
let annualRateOfReturn = 6;
let annualCostIncrease = 5;
let futureCost = 0;

let amountSaved = 0;
let percentageSaved = 0;
let percentages = [];

let periods = 12; // Monthly contributions

// messaging variables
let excessMessageShowing = false;

function initUI() {
  periodSelect.addEventListener("change", (e) => {
    periods = e.target.value;
    update();
  });
  yearsSlider.addEventListener("input", updateYears);
  plannedContributionSlider.addEventListener(
    "input",
    updatePlannedContribution
  );
  ROfRSlider.addEventListener("input", updateROfR);
  annualCostIncreaseSlider.addEventListener("input", updateCostIncrease);
  startingAmountInput.addEventListener("input", updateStartingAmount);
  annualCollegeCostSlider.addEventListener("input", updateYearlyCost);

  collegeListFinal.forEach((college) => {
    const option = document.createElement("option");
    const collegeColors =
      college.colors.length > 0 ? college.colors : ["#555879", "#98A1BC"]; // Fallback colors
    option.value = `${collegeColors.join(",")}|${college.cost}`;
    option.textContent = college.name;
    const selected =
      college.name === "Average out-of-state Public College" ? true : false;
    option.selected = selected;
    collegeSelect.appendChild(option);
  });
  collegeSelect.addEventListener("change", selectCollege);

  selectCollege({ target: { value: collegeSelect.value } });

  initNavBar();
}

function initNavBar() {
  pieIcon.addEventListener("click", () => {
    pieIcon.classList.remove("icondeselected");
    barIcon.classList.add("icondeselected");
    showPieChart();
  });
  barIcon.addEventListener("click", () => {
    pieIcon.classList.add("icondeselected");
    barIcon.classList.remove("icondeselected");
    showBarGraph();
  });
}

function updateStartingAmount(e) {
  let value = e.target.value.replace(/[^0-9.]/g, "");
  if (value === "") {
    startingAmountInput.value = "";
    return;
  }
  let num = parseFloat(value);
  if (isNaN(num)) num = 0;
  startingAmountInput.value = convertToDollarString(num);
  update();
}

function selectCollege(e) {
  // console.log("e.target.value", e.target.value);
  const arr = e.target.value.split("|");
  // console.log("array", arr);
  const collegeColors = arr[0].split(",");
  // const newColors =
  //   collegeColors.length > 0 ? collegeColors : ["#555879", "#98A1BC"]; // Fallback colors
  changePathColor(collegeColors);
  yearlyCost = arr[1]; // Assuming the third part is the cost

  if (yearlyCost) {
    annualCollegeCostSlider.value = yearlyCost;
    annualCollegeCostText.innerText = convertToDollarString(yearlyCost);
    update();
  } else {
    // console.log("No college selected");
  }
}

function changePathColor(colors) {
  // console.log("colors[0]", colors[0]);
  const circleBG = document.getElementById("circleBG");
  // console.log("Changing path colors to:", colors);
  savedPath.setAttribute("stroke", colors[0] || "red");
  overflowPath.setAttribute("stroke", colors[0]);
  circleBG.setAttribute("stroke", colors[1]);
  bars.forEach((bar) => {
    bar.setAttribute("fill", colors[1]);
  });
  savingsBars.forEach((savingsBar) => {
    savingsBar.setAttribute("fill", colors[0]);
  });
}

function updateYearlyCost(e) {
  // console.log(e.target.value);
  yearlyCost = parseFloat(e.target.value);
  annualCollegeCostText.innerText = convertToDollarString(yearlyCost);
  update();
}

function updateYears(e) {
  // console.log(e.target.value);
  yearsUntilText.innerText = Math.round(e.target.value);
  update();
}

function updatePlannedContribution(e) {
  // console.log(e.target.value);
  plannedContributionText.innerText = convertToDollarString(e.target.value);
  update();
}

function updateROfR(e) {
  // console.log(e.target.value);
  ROfRText.innerText = e.target.value + "%";
  update();
}

function updateCostIncrease(e) {
  // console.log(e.target.value);
  costIncreaseText.innerText = e.target.value + "%";
  update();
}

function update() {
  updateValues();
  updateSummary();
  updatePaths();
}

const FV = (PMT, r, n) => {
  if (r === 0) return PMT * n; // If rate is 0, future value is just the total contributions
  return PMT * (((1 + r) ** n - 1) / r);
};

function calculateAmountSaved(
  initialBalance,
  monthlyContribution,
  annualRateOfReturn,
  years
) {
  const r = annualRateOfReturn / 100 / periods; // Monthly rate of return
  const num = years * periods; // Total number of months
  const mr = 1 + r;
  const FV = initialBalance + monthlyContribution * ((mr ** num - 1) / r);

  const monthlyRateOfReturn = annualRateOfReturn / 100 / periods;
  // console.log("monthly rate of return:", monthlyRateOfReturn);
  const totalMonths = years * periods;
  let balance = initialBalance;

  for (let month = 0; month < totalMonths; month++) {
    balance += monthlyContribution;
    balance += balance * monthlyRateOfReturn;
  }

  return balance;
}

function totalFutureCost(currentCost, yearsUntil, totalYears) {
  yearlyCostByYear = [];
  const annualCollegeCostIncrease = 1 + annualCostIncrease / 100; // 5% increase per year
  let futureYearlyCost = currentCost;
  for (let i = 0; i < yearsUntil; i++) {
    futureYearlyCost *= annualCollegeCostIncrease;
  }

  let futureCost = 0;
  for (let i = 0; i < totalYears; i++) {
    futureCost += futureYearlyCost;
    yearlyCostByYear.push(Math.round(futureYearlyCost));
    futureYearlyCost *= annualCollegeCostIncrease;
  }
  // console.log("fix this  yearlyCostByYear", yearlyCostByYear);
  return Math.round(futureCost);
}

function maxYearlyCost(currentCost, yearsUntil, totalYears) {
  const annualCollegeCostIncrease = 1 + annualCostIncrease / 100; // 5% increase per year
  let futureYearlyCost = currentCost;
  for (let i = 1; i < yearsUntil + totalYears; i++) {
    futureYearlyCost *= annualCollegeCostIncrease;
  }
  return Math.round(futureYearlyCost);
}

function convertToDollarString(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function updateValues() {
  periods = periodSelect.value;
  yearsToCollege = parseFloat(Math.round(yearsSlider.value));
  yearsOfCollege = 4;

  futureCost = totalFutureCost(yearlyCost, yearsToCollege, yearsOfCollege);

  monthlyContribution = parseFloat(plannedContributionSlider.value);
  let startingAmount = startingAmountInput.value;
  if (startingAmount === "") {
    startingAmount = "0";
  }

  let startingAmountNum = Number(startingAmount.replace(/[^0-9.]/g, ""));
  initialBalance = parseFloat(startingAmountNum);
  annualRateOfReturn = parseFloat(ROfRSlider.value);
  annualCostIncrease = parseFloat(annualCostIncreaseSlider.value);
  maxYearlyCollegeCost = maxYearlyCost(
    mostExpensiveCollege.cost,
    yearsToCollege,
    yearsOfCollege
  );

  // console.log("fix this  maxYearlyCollegeCost", maxYearlyCollegeCost);

  amountSaved = calculateAmountSaved(
    initialBalance,
    monthlyContribution,
    annualRateOfReturn,
    yearsToCollege
  );

  console.log("amountSaved", amountSaved);

  percentageSaved = (amountSaved / futureCost) * 100;

  yearlySavedByYear = [];
  for (let i = 0; i < yearlyCostByYear.length; i++) {
    const savedThisYear = (yearlyCostByYear[i] * percentageSaved) / 100;
    yearlySavedByYear.push(Math.round(savedThisYear));
  }

  percentages = yearlyCostByYear.map((cost) => {
    const percentage = (cost / maxYearlyCollegeCost) * 100;
    return percentage > 100 ? 100 : percentage;
  });
}

function updateSummary() {
  if (percentageSaved > 200) percentageSaved = 200;

  projectedSavings.innerText = convertToDollarString(amountSaved);
  projectedTotal.innerText = convertToDollarString(futureCost);
  projectedPercentSaved.innerText =
    ((amountSaved / futureCost) * 100).toFixed(0) + "%";
  let amt = futureCost - amountSaved;
  let prefix = amt < 0 ? "+" : "";
  if (amt < 0) amt *= -1;
  fundingNeededText.innerText = `${prefix}${convertToDollarString(amt)}`;

  if (percentageSaved > 100) {
    if (!excessMessageShowing) {
      fundingNeededTitle.innerText = "potential excess savings";
      extraFundingInstructions.classList.remove("hiddenMessage");
      excessMessageShowing = true;
    }
  } else {
    if (excessMessageShowing) {
      fundingNeededTitle.innerText = "total alt funding needed";
      extraFundingInstructions.classList.add("hiddenMessage");
      excessMessageShowing = false;
    }
  }

  fundsNeeded.forEach((fund, index) => {
    const amt = yearlyCostByYear[index] - yearlySavedByYear[index];
    console.log("amt", amt);
    fund.innerText = convertToDollarString(amt);
  });
}

function updatePaths() {
  let savedPathValue = percentageSaved > 100 ? 100 : percentageSaved;
  let overflowPathValue = percentageSaved > 100 ? 100 - percentageSaved : 0;

  // console.log("savedPathValue", savedPathValue);
  savedPath.setAttribute("stroke-dashoffset", 100 - savedPathValue);
  overflowPath.setAttribute("stroke-dashoffset", overflowPathValue - 100);
  dividerPath.setAttribute(
    "transform",
    `rotate(${(savedPathValue / 100) * 360})`
  );

  console.log("percentages", percentages);
  updateBarGraph();
  // let totalSaved = 0;
  // bars.forEach((bar, index) => {
  //   const percentage = percentages[index] || 0; // Default to 0 if no value

  //   const height = Math.max((percentage / 100) * 1000, 0); // Minimum height of 5px

  //   bar.setAttribute("transform", `translate(0 ${height})`);
  //   const barText = bar.querySelector("text");
  //   const cost = (maxYearlyCollegeCost * percentage) / 100;
  //   barText.textContent = convertToDollarString(cost); // Reset text content
  //   let savingsHeight = (height * percentageSaved) / 100;
  //   savingsBars[index].setAttribute(
  //     "transform",
  //     `translate(0 ${savingsHeight})`
  //   );
  //   const newPercentage = (percentage / 100) * (percentageSaved / 100);
  //   console.log("newPercentage", newPercentage);
  //   totalSaved += maxYearlyCollegeCost * newPercentage;
  //   const savingsAmount = convertToDollarString(cost * (percentageSaved / 100));
  //   const savingsBarText = savingsBars[index].querySelector("text");
  //   savingsBarText.textContent = savingsAmount;
  // });

  yaxisText.forEach((text, index) => {
    const percentage = ((index + 1) * 50000) / maxYearlyCollegeCost; // Calculate percentage based on index
    const ypos = -percentage * 1000;
    text.setAttribute("transform", `scale(1 -1) translate(0 ${ypos})`);
  });
}

function updateBarGraph() {
  let totalSaved = 0;
  bars.forEach((bar, index) => {
    const percentage = percentages[index] || 0; // Default to 0 if no value

    const height = Math.max((percentage / 100) * 1000, 0); // Minimum height of 5px

    bar.setAttribute("transform", `translate(0 ${height})`);
    const barText = bar.querySelector("text");
    const cost = (maxYearlyCollegeCost * percentage) / 100;
    barText.textContent = convertToDollarString(cost); // Reset text content
    let savingsHeight = (height * percentageSaved) / 100;
    savingsBars[index].setAttribute(
      "transform",
      `translate(0 ${savingsHeight})`
    );
    const newPercentage = (percentage / 100) * (percentageSaved / 100);
    console.log("newPercentage", newPercentage);
    totalSaved += maxYearlyCollegeCost * newPercentage;
    const savingsAmount = convertToDollarString(yearlySavedByYear[index]);
    const savingsBarText = savingsBars[index].querySelector("text");
    savingsBarText.textContent = savingsAmount;
  });
}

function showBarGraph() {
  const barGraph = document.getElementById("barGraph");
  const pieChart = document.getElementById("pieChart");
  barGraph.classList.remove("hidden");
  pieChart.classList.add("hidden");
}

function showPieChart() {
  const barGraph = document.getElementById("barGraph");
  const pieChart = document.getElementById("pieChart");
  barGraph.classList.add("hidden");
  pieChart.classList.remove("hidden");
}

initUI();
update();
