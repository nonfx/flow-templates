import Layout from "./Layout.vue";
import file from "./Layout.vue?raw";

import HomeSection from "./HomeSection.vue";
import HomeFile from "./HomeSection.vue?raw";

import Body from "./BodySection.vue";
import bodyFile from "./BodySection.vue?raw";

import Search from "./SearchSection.vue";
import searchFile from "./SearchSection.vue?raw";

import TabContents from "./TabContentSection.vue";
import tabContentsFile from "./TabContentSection.vue?raw";

import AboutSection from "./AboutPlatform.vue";
import aboutSectionFile from "./AboutPlatform.vue?raw";

import FilterSection from "./FilterSection.vue";
import filterSectionFile from "./FilterSection.vue?raw";

import GridCards from "./GridCards.vue";
import gridCardsFile from "./GridCards.vue?raw";

import ListCards from "./ListCards.vue";
import listCardsFile from "./ListCards.vue?raw";

import ListCard from "./ListCard.vue";
import listCardFile from "./ListCard.vue?raw";

import RelatedItems from "./RelatedItems.vue";
import relatedItemsFile from "./RelatedItems.vue?raw";

import Inventory from "./Inventory.vue";
import inventoryFile from "./Inventory.vue?raw";

import Links from "./Links.vue";
import linksFile from "./Links.vue?raw";

import CounterHeader from "./CounterHeader.vue";
import counterHeaderFile from "./CounterHeader.vue?raw";

import IconsBox from "./IconsBox.vue";
import iconsBoxFile from "./IconsBox.vue?raw";

import TagsQueue from "./TagsQueue.vue";
import tagsQueueFile from "./TagsQueue.vue?raw";

import StorageDetails from "./StorageDetails.vue";
import storageDetailsFile from "./StorageDetails.vue?raw";

import UsageExample from "./UsageExample.vue";
import ssageExampleFile from "./UsageExample.vue?raw";

import DependencyGraph from "./DependencyGraph.vue";
import dependencyGraphFile from "./DependencyGraph.vue?raw";

export default {
	title: "Templates/Admin Template Layout",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 900
		}
	}
};

const adminLayoutDescription = `
Here we present an Admin Layout Template for multiple uses:
1. The below story acts as the main working story and representation of mock.
2. All the other components can be used to build various sections of the admin template.
3. The components initiate with an underscore '_'. 
`;

export const AdminLayout = {
	name: "ft-admin-layout",
	parameters: {
		docs: {
			source: {
				code: HomeFile
			},
			description: {
				component: adminLayoutDescription
			}
		}
	},
	render: () => HomeSection
};

export const LayoutSectionComponent = {
	name: "_layout",
	parameters: {
		docs: {
			source: {
				code: file
			},
			description: {
				story: `This is the Layout component used as ''< Layout > < / Layout >''. It consists of all the basic structure including top-nav and footer inside it.`
			}
		}
	},
	render: () => Layout
};

export const BodySectionComponent = {
	name: "_body_section",
	parameters: {
		docs: {
			source: {
				code: bodyFile
			},
			description: {
				story: `This is the BodySection component used as ''< BodySection > < / BodySection >''.`
			}
		}
	},
	render: () => Body
};

export const SearchSectionComponent = {
	name: "_search_section",
	parameters: {
		docs: {
			source: {
				code: searchFile
			},
			description: {
				story: `This is the SearchSection component used as ''< SearchSection > < / SearchSection >''. It includes the top-search bar and filter-icon `
			},
			iframeHeight: 150
		}
	},
	render: () => Search
};

export const TabContentsSectionComponent = {
	name: "_tab_contents_section",
	parameters: {
		docs: {
			source: {
				code: tabContentsFile
			},
			description: {
				story: `This is the TabContentSection component used as ''< TabContentSection > < / TabContentSection >''. All the visible components inside tab-nodes are a part of this.`
			}
		}
	},
	render: () => TabContents
};

export const AboutPlatformComponent = {
	name: "_about_platform",
	parameters: {
		docs: {
			source: {
				code: aboutSectionFile
			},
			description: {
				story: `This is the AboutPlatform component used as ''< AboutPlatform > < / AboutPlatform >''. It opens on changing the selected tab-node`
			}
		}
	},
	render: () => AboutSection
};

export const FilterSectionComponent = {
	name: "_filter_section",
	parameters: {
		docs: {
			source: {
				code: filterSectionFile
			},
			description: {
				story: `This is the FilterSection component used as ''< FilterSection > < / FilterSection >''. It includes the left column filter being displayed which is reposnsive in nature.`
			},
			iframeHeight: 300
		}
	},
	render: () => FilterSection
};

export const GridCardsComponent = {
	name: "_grid_cards",
	parameters: {
		docs: {
			source: {
				code: gridCardsFile
			},
			description: {
				story: `This is the GridCards component used as ''< GridCards > < / GridCards >''. This component is the basic grid card formation used at the initial step.`
			},
			iframeHeight: 600
		}
	},
	render: () => GridCards
};

export const ListCardsComponent = {
	name: "_list_cards",
	parameters: {
		docs: {
			source: {
				code: listCardsFile
			},
			description: {
				story: `This is the ListCards component used as ''< ListCards > < / ListCards >''. On click of grid cards we navigate to a list of cards.`
			},
			iframeHeight: 600
		}
	},
	render: () => ListCards
};

export const ListCardComponent = {
	name: "_list_card",
	parameters: {
		docs: {
			source: {
				code: listCardFile
			},
			description: {
				story: `This is the ListCard component used as ''< ListCard > < / ListCard >''. UX representation of single card in list.`
			},
			iframeHeight: 200
		}
	},
	render: () => ListCard
};

export const TagsQueueComponent = {
	name: "_tags_queue",
	parameters: {
		docs: {
			source: {
				code: tagsQueueFile
			},
			description: {
				story: `This is the TagsQueue component used as ''< TagsQueue > < / TagsQueue >''.`
			},
			iframeHeight: 200
		}
	},
	render: () => TagsQueue
};

export const StorageDetailsComponent = {
	name: "_storage_details",
	parameters: {
		docs: {
			source: {
				code: storageDetailsFile
			},
			description: {
				story: `This is the StorageDetails component used as ''< StorageDetails > < / StorageDetails >''.`
			},
			iframeHeight: 600
		}
	},
	render: () => StorageDetails
};

export const UsageExampleComponent = {
	name: "_usage_example",
	parameters: {
		docs: {
			source: {
				code: ssageExampleFile
			},
			description: {
				story: `This is the UsageExample component used as ''< UsageExample > < / UsageExample >''. It even has a responsive 2 column layout formation.`
			},
			iframeHeight: 600
		}
	},
	render: () => UsageExample
};

export const IconsBoxComponent = {
	name: "_icons_box",
	parameters: {
		docs: {
			source: {
				code: iconsBoxFile
			},
			description: {
				story: `This is the IocnsBox component used as ''< IocnsBox > < / IocnsBox >''. It's a table of icons.`
			},
			iframeHeight: 300
		}
	},
	render: () => IconsBox
};

export const RelatedItemsComponent = {
	name: "_related_items",
	parameters: {
		docs: {
			source: {
				code: relatedItemsFile
			},
			description: {
				story: `This is the RelatedItems component used as ''< RelatedItems > < / RelatedItems >''.`
			},
			iframeHeight: 300
		}
	},
	render: () => RelatedItems
};

export const CounterHeaderComponent = {
	name: "_counter_header",
	parameters: {
		docs: {
			source: {
				code: counterHeaderFile
			},
			description: {
				story: `This is the CounterHeader component used as ''< CounterHeader > < / CounterHeader >''. This header was being used at more than one instances.`
			},
			iframeHeight: 100
		}
	},
	render: () => CounterHeader
};

export const InventoryComponent = {
	name: "_inventory",
	parameters: {
		docs: {
			source: {
				code: inventoryFile
			},
			description: {
				story: `This is the Inventory component used as ''< Inventory > < / Inventory >''.`
			},
			iframeHeight: 300
		}
	},
	render: () => Inventory
};

export const LinksComponent = {
	name: "_links",
	parameters: {
		docs: {
			source: {
				code: linksFile
			},
			description: {
				story: `This is the Links component used as ''< Links > < / Links >''. Used to display some links in a vertical list.`
			},
			iframeHeight: 300
		}
	},
	render: () => Links
};

export const DependencyGraphComponent = {
	name: "_dependency_graph",
	parameters: {
		docs: {
			source: {
				code: dependencyGraphFile
			},
			description: {
				story: `This is the DependencyGraph component used as ''< DependencyGraph > < / DependencyGraph >''. Coming Soon.....`
			},
			iframeHeight: 600
		}
	},
	render: () => DependencyGraph
};
