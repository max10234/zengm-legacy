// @flow

/* eslint quote-props: "off" */

var championPatch;


    //Role		Champion		Win Rate
championPatch = [

	["MID","Hacker",0.4987,"Tinker"],
	["MID","Dark Devil",0.4905],
	["MID","Thunder Soul",0.4924],
	["MID","Templar Killer",0.4892],
	["MID","Conjuror",0.4819],
	["MID","Outerrealm Eater",0.5006],
	["MID","Queen of Suffering",0.4464],
	["MID","Death Seer",0.4844],
	["MID","Fae Dragon",0.4422],
	["MID","Lightning God",0.5762],
	["MID","Cinder Ghost",0.4996],
	["MID","Poison Snake",0.5251],
	["MID","Potion Maker",0.5099],
	["MID","Unifier",0.5126],
	["MID","Pyromaniac",0.4746],
	["MID","Sharpshooter",0.5463],
	["MID","Geomancer",0.5164],
	["MID","Chain Lighter",0.4664],
	["MID","Drake FIghter",0.5164],
	["MID","Energy Mage",0.5072],
	["MID","Gust Archer",0.4678],
	["MID","Admiral",0.486],
	["MID","Wizard",0.4761],
	["MID","Little John",0.4851],
	["MID","Meat Killer",0.5216],
	["MID","Irithel",0.523],
	["MID","Gorgon",0.5149],
	["MID","Fugitive FInder",0.5264],
	["MID","Divine Fighter",0.497],
	["MID","Gargoyle ",0.5816],
	["MID","Flame Skeleton",0.5337],
	["MID","Ground Being",0.4852],
	["MID","Petrifier",0.499],
	["MID","Death Raiser",0.5707],
	["MID","Bluehate Wizard",0.506],
	["MID","Monkey King",0.5071],
	["MID","Stealth Killer",0.5418],
	["MID","Beerman",0.4952],
	["MID","Quieter",0.5235],
	["MID","Ghost Assassin",0.555],
	["MID","Wisp",0.4505],
	["MID","Dark Fae",0.4802],
	["MID","Dark Spy",0.5141],
	["MID","Morph Fellow",0.482],
	["MID","Polar Animal",0.4718],
	["MID","Mer",0.4956],
	["MID","Spidercarer",0.4733],
	["MID","Woundsearcher",0.5789],
	["MID","Dark Elf Archer",0.5429],
	["MID","Self Summoner",0.4996],
	["MID","Pilot",0.4727],
	["MID","Chainsaw",0.4944],
	["MID","Venum Snake",0.5297],
	["MID","Groundmover",0.521],
	["MID","Grand Magician",0.4611],
	["MID","Batmounter",0.4481],
	["MID","Quickdead",0.5042],
	["MID","Nightmare",0.474],
	["MID","Bomb Maker",0.4565],
	["MID","Clothesmaker",0.5162],
	["MID","Soul Crusher",0.568],
	["MID","Ogre Wizard",0.5373],
	["MID","Dark Spirit",0.4799],
	["MID","Troll King",0.5149],
	["MID","Fortune Teller",0.4369],
	["MID","Witchcrafter",0.5289],
	["MID","Ghost Piercer",0.5118],
	["MID","Vengeful Ghost",0.5411],
	["MID","Great Bear",0.5713],
	["MID","Dark Spiritman",0.534],
	["MID","Cold Dragon",0.4952],
	["MID","Ancient God",0.5437],
	["MID","Fencer",0.4243],
	["MID","Tiger",0.4794],
	["MID","Agitator",0.5156],
	["MID","Two Headed Dragon",0.5257],
	["MID","Steamroller",0.527],
	["MID","Sorceress",0.454],
	["MID","Ice Mage",0.5265],
	["MID","Old Ghost",0.4877],
	["MID","Moon Mounter",0.5529],
	["MID","Animalruler",0.4944],
	["MID","Army Leader",0.5027],
	["MID","Phoenix",0.5172],
	["MID","Dependable",0.5216],
	["MID","Amaze",0.5047],
	["MID","Sand Lord",0.5079],
	["OFF","Replica Maker",0.505],
	["OFF","Hedgehog",0.4848],
	["OFF","Centaur Warrior",0.5499],
	["OFF","Dependable",0.5104],
	["OFF","Tsunami Tracker",0.5224],
	["OFF","Chainsaw",0.4792],
	["OFF","Vassal",0.5682],
	["OFF","Unkillable",0.5348],
	["OFF","Quickdead",0.5082],
	["OFF","Spidercarer",0.4112],
	["OFF","Ocean Guard",0.5179],
	["OFF","Batmounter",0.4512],
	["OFF","Phoenix",0.5081],
	["OFF","Fencer",0.4647],
	["OFF","Devil",0.5718],
	["OFF","Animalruler",0.4783],
	["OFF","Beerman",0.505],
	["OFF","Clothesmaker",0.5155],
	["OFF","Bomb Maker",0.4905],
	["OFF","Sand Lord",0.4988],
	["OFF","Emptiness",0.5129],
	["OFF","Wizard",0.4722],
	["OFF","Soul Crusher",0.5574],
	["OFF","Polar Animal",0.4595],
	["OFF","Dark Spy",0.5135],
	["OFF","Ancient God",0.5264],
	["OFF","Gust Archer",0.4765],
	["OFF","Lone Soldier",0.5314],
	["OFF","Certain Death",0.5091],
	["OFF","Death Raiser",0.5732],
	["OFF","Groundmover",0.514],
	["OFF","Stealth Killer",0.5457],
	["OFF","Sorceress",0.4814],
	["OFF","Conservationist",0.5404],
	["OFF","Fugitive FInder",0.4883],
	["OFF","Ice Mage",0.5507],
	["OFF","Venum Snake",0.5294],
	["OFF","Omnipaladin",0.5877],
	["OFF","Meat Killer",0.5347],
	["OFF","Irithel",0.5145],
	["OFF","Petrifier",0.4898],
	["OFF","Monkey King",0.4674],
	["OFF","Flame Skeleton",0.4743],
	["OFF","Self Summoner",0.4692],
	["OFF","Divine Fighter",0.4678],
	["OFF","Drake FIghter",0.4864],
	["OFF","Ground Being",0.4652],
	["OFF","Admiral",0.475],
	["OFF","Chain Lighter",0.4645],
	["OFF","Little John",0.4391],
	["OFF","Poison Snake",0.5001],
	["OFF","Dark Fae",0.4976],
	["OFF","Light Mage",0.4978],
	["OFF","Two Headed Dragon",0.528],
	["OFF","Quieter",0.5368],
	["OFF","Fae Dragon",0.4415],
	["OFF","Energy Mage",0.4612],
	["OFF","Gargoyle ",0.4932],
	["OFF","Witchcrafter",0.5464],
	["OFF","Ogre Wizard",0.5307],
	["OFF","Nightmare",0.4664],
	["OFF","Anarchy Fighter",0.5203],
	["OFF","Earth Priest",0.4447],
	["OFF","Army Leader",0.4856],
	["OFF","Bluehate Wizard",0.4842],
	["OFF","Wisp",0.4176],
	["OFF","Vengeful Ghost",0.5286],
	["OFF","Lightning God",0.554],
	["OFF","Cold Dragon",0.4803],
	["OFF","Medicine Man",0.513],
	["OFF","Death Seer",0.4633],
	["OFF","Amaze",0.516],
	["OFF","Pilot",0.4651],
	["OFF","Mer",0.4437],
	["OFF","Old Ghost",0.5003],
	["OFF","Queen of Suffering",0.4393],
	["OFF","Sharpshooter",0.4961],
	["OFF","Fortune Teller",0.4283],
	["OFF","Pyromaniac",0.4517],
	["OFF","Dark Spiritman",0.5214],
	["OFF","Dark Spirit",0.4626],
	["OFF","Ghost Piercer",0.4726],
	["OFF","Tiger",0.4705],
	["OFF","Unifier",0.4162],
	["OFF","Dark Elf Archer",0.5058],
	["OFF","Great Bear",0.5517],
	["OFF","Grand Magician",0.4647],
	["OFF","Gorgon",0.4946],
	["OFF","Immortal Lord",0.548],
	["OFF","Agitator",0.5033],
	["OFF","Ghost Assassin",0.4898],
	["OFF","Ice Girl",0.5478],
	["OFF","Woundsearcher",0.5186],
	["OFF","Wolfman",0.49],
	["OFF","Rogue Paladin",0.5105],
	["OFF","Troll King",0.4851],
	["OFF","Flying Piranha",0.4658],
	["OFF","Horrorknife",0.4835],
	["OFF","Morph Fellow",0.4496],
	["OFF","Moon Mounter",0.516],
	["OFF","Geomancer",0.3907],
	["OFF","Steamroller",0.4787],
	["OFF","Creep Controller",0.4677],
	["OFF","Healthtaker",0.4787],
	["OFF","Riddle",0.5243],
	["OFF","Meltdown ",0.5273],
	["OFF","Potion Maker",0.4233],
	["OFF","Conjuror",0.4576],
	["OFF","Mage Destoryer",0.4308],
	["OFF","Cinder Ghost",0.4136],
	["OFF","Outerrealm Eater",0.4618],
	["SAFE","Meltdown ",0.559],
	["SAFE","Mage Destoryer",0.4897],
	["SAFE","Flying Piranha",0.4925],
	["SAFE","Rogue Paladin",0.5346],
	["SAFE","Moon Mounter",0.5417],
	["SAFE","Steamroller",0.5053],
	["SAFE","Horrorknife",0.5081],
	["SAFE","Ghost Piercer",0.481],
	["SAFE","Tiger",0.4753],
	["SAFE","Agitator",0.5028],
	["SAFE","Amaze",0.5101],
	["SAFE","Medicine Man",0.5116],
	["SAFE","Morph Fellow",0.4741],
	["SAFE","Old Ghost",0.5022],
	["SAFE","Anarchy Fighter",0.5288],
	["SAFE","Dark Spiritman",0.525],
	["SAFE","Fortune Teller",0.442],
	["SAFE","Pilot",0.4638],
	["SAFE","Cold Dragon",0.4909],
	["SAFE","Ice Girl",0.5454],
	["SAFE","Grand Magician",0.4676],
	["SAFE","Ghost Assassin",0.514],
	["SAFE","Dark Spirit",0.4722],
	["SAFE","Dark Elf Archer",0.5409],
	["SAFE","Vengeful Ghost",0.5234],
	["SAFE","Troll King",0.5118],
	["SAFE","Witchcrafter",0.5368],
	["SAFE","Two Headed Dragon",0.5197],
	["SAFE","Nightmare",0.4689],
	["SAFE","Ogre Wizard",0.5219],
	["SAFE","Light Mage",0.4876],
	["SAFE","Omnipaladin",0.573],
	["SAFE","Mer",0.4431],
	["SAFE","Immortal Lord",0.5548],
	["SAFE","Ice Mage",0.5453],
	["SAFE","Great Bear",0.5416],
	["SAFE","Gorgon",0.4921],
	["SAFE","Healthtaker",0.4947],
	["SAFE","Conservationist",0.5236],
	["SAFE","Quieter",0.53],
	["SAFE","Bluehate Wizard",0.4769],
	["SAFE","Wisp",0.3962],
	["SAFE","Dark Fae",0.4957],
	["SAFE","Wolfman",0.5084],
	["SAFE","Gargoyle ",0.4899],
	["SAFE","Emptiness",0.4868],
	["SAFE","Flame Skeleton",0.4928],
	["SAFE","Petrifier",0.4784],
	["SAFE","Divine Fighter",0.4908],
	["SAFE","Monkey King",0.4616],
	["SAFE","Ancient God",0.5267],
	["SAFE","Little John",0.4228],
	["SAFE","Groundmover",0.5045],
	["SAFE","Venum Snake",0.514],
	["SAFE","Clothesmaker",0.5039],
	["SAFE","Devil",0.54],
	["SAFE","Sharpshooter",0.4915],
	["SAFE","Energy Mage",0.4494],
	["SAFE","Admiral",0.4713],
	["SAFE","Chain Lighter",0.4395],
	["SAFE","Pyromaniac",0.4492],
	["SAFE","Unifier",0.4365],
	["SAFE","Ground Being",0.443],
	["SAFE","Geomancer",0.4287],
	["SAFE","Death Raiser",0.5466],
	["SAFE","Potion Maker",0.4376],
	["SAFE","Cinder Ghost",0.4299],
	["SAFE","Drake FIghter",0.4671],
	["SAFE","Phoenix",0.503],
	["SAFE","Meat Killer",0.5091],
	["SAFE","Self Summoner",0.4411],
	["SAFE","Polar Animal",0.4336],
	["SAFE","Fencer",0.3774],
	["SAFE","Ocean Guard",0.4882],
	["SAFE","Irithel",0.4929],
	["SAFE","Unkillable",0.5047],
	["SAFE","Woundsearcher",0.5161],
	["SAFE","Stealth Killer",0.5167],
	["SAFE","Dark Spy",0.4805],
	["SAFE","Soul Crusher",0.5292],
	["SAFE","Sand Lord",0.4782],
	["SAFE","Quickdead",0.4954],
	["SAFE","Poison Snake",0.4739],
	["SAFE","Fugitive FInder",0.4596],
	["SAFE","Beerman",0.4511],
	["SAFE","Bomb Maker",0.4568],
	["SAFE","Gust Archer",0.4437],
	["SAFE","Vassal",0.4978],
	["SAFE","Hedgehog",0.4462],
	["SAFE","Outerrealm Eater",0.4861],
	["SAFE","Army Leader",0.4587],
	["SAFE","Creep Controller",0.4422],
	["SAFE","Lightning God",0.5363],
	["SAFE","Sorceress",0.4037],
	["SAFE","Animalruler",0.437],
	["SAFE","Batmounter",0.4226],
	["SAFE","Death Seer",0.4401],
	["SAFE","Centaur Warrior",0.5062],
	["SAFE","Certain Death",0.4426],
	["SAFE","Spidercarer",0.3551],
	["SAFE","Tsunami Tracker",0.4763],
	["SAFE","Chainsaw",0.4507],
	["SAFE","Dependable",0.4805],
	["SAFE","Wizard",0.4235],
	["SAFE","Replica Maker",0.4589],
	["SAFE","Lone Soldier",0.4829],
	["SAFE","Queen of Suffering",0.4178],
	["SAFE","Templar Killer",0.4152],
	["SAFE","Earth Priest",0.4111],
	["JGL","Riddle",0.519],
	["JGL","Creep Controller",0.4631],
	["JGL","Earth Priest",0.4169],
	["JGL","Army Leader",0.469],
	["JGL","Woundsearcher",0.5177],
	["JGL","Sorceress",0.398],
	["JGL","Lone Soldier",0.5036],
	["JGL","Healthtaker",0.4557],
	["JGL","Wolfman",0.4945],
	["JGL","Certain Death",0.44],
	["JGL","Self Summoner",0.3974],
	["JGL","Immortal Lord",0.5331],
	["JGL","Great Bear",0.5271],
	["JGL","Sand Lord",0.469],
	["JGL","Animalruler",0.483],
	["JGL","Ice Girl",0.523],
	["JGL","Troll King",0.4966],
	["JGL","Bomb Maker",0.4544],
	["JGL","Geomancer",0.4108],
	["JGL","Potion Maker",0.4168],
	["JGL","Fugitive FInder",0.5516],
	["JGL","Stealth Killer",0.5987],
	["JGL","Irithel",0.4978],
	["JGL","Venum Snake",0.509],
	["JGL","Batmounter",0.4177],
	["JGL","Conservationist",0.5166],
	["JGL","Ground Being",0.4785],
	["JGL","Dark Spy",0.5036],
	["JGL","Wisp",0.4363],
	["JGL","Mer",0.4269],
	["JGL","Light Mage",0.4692],
	["JGL","Replica Maker",0.4582],
	["JGL","Dark Spirit",0.4748],
	["ROAM","Soul Crusher",0.5458],
	["ROAM","Ground Being",0.4397],
	["ROAM","Fugitive FInder",0.4989],
	["ROAM","Earth Priest",0.4355],
	["ROAM","Bomb Maker",0.3936],
	["ROAM","Creep Controller",0.4091],
	["ROAM","Dark Fae",0.5169],
	["ROAM","Venum Snake",0.4794],
	["ROAM","Stealth Killer",0.5184],
	["ROAM","Dark Spy",0.4989],
	["ROAM","Irithel",0.4763],
	["ROAM","Wisp",0.2609],
	["ROAM","Meat Killer",0.5098],
	["ROAM","Polar Animal",0.438],
	["ROAM","Animalruler",0.4512],
	["ROAM","Tsunami Tracker",0.3894],
	["ROAM","Riddle",0.475],
	["ROAM","Certain Death",0.413],

];

//export default {
export {
    // eslint-disable-next-line import/prefer-default-export
	championPatch,
};
