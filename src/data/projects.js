import React from "react";

export const ProjectsData = {

    "bottleup" : {
        "title": "Bottling Up Assistant",
        "imageURL": "",
        "imageText": "0x1F37E",
        "startDate": 2018,
        "endDate": 0,
        "description": "Mobile application for speeding up restocking of fridges at my previous workplace",
        "tags": ["Android (Java/Kotlin)"],
        "stack": ["Java", "Kotlin", "Python"],
        "github": "https://github.com/jamesscully/spoons-bottle-up",
        "pageContent": {
            "text":
            <div>
                <p>
                    This was an Android application that was initially developed in 2018 during employment at Wetherspoons.
                    It started at first as a way to dip into Android development, but served to use and evolve
                    my skills in the area.
                </p>
                <p>
                    Its purpose is to speed up restocking of fridges at the end of the night by using a mobile phone
                    rather than scribbling with a pen on paper. With the current version, users can get a list of products
                    and quantity to get by entering how many they need, or by how many are left in the fridge; the latter
                    uses a pre-defined max amount value to calculate the difference.
                </p>
                <p>
                    Albeit a trivial application, seeing it iterate from a primitive and <i>(laggy)</i> long list of
                    buttons with product names to an application that feels good to use at work with the help of colleagues
                    and their feedback. My favourite time with this application would be reverse-engineering the official
                    Wetherspoon app to get an API endpoint for retrieving JSON product data, and parsing with Python
                    to create a database that could be used as a base for the application. Of course, writing each
                    product down into a database would be easier, but quite mundane!
                </p>
                <p>
                    Some updates I plan to add to this are:
                    <ul>
                        <li>Wear OS / Smartwatch integration</li>
                        <li>Android Beam support</li>
                        <li>Support for more pubs</li>
                    </ul>

                    Smartwatches would be a big plus, as this would remove the need to pick up / look at the phone each
                    time, and being able to transfer a list to a colleague with a tap of phones would be not just
                    extremely cool, but massively helpful and on par with physical lists.
                    <br/>
                    <br/>
                    However, I currently have neither a second phone
                    or smart watch :(
                </p>
            </div>,
            "video": "https://www.youtube.com/embed/kF9vgrtHUu0/",
            "app_store": "https://play.google.com/store/apps/details?id=com.scullyapps.spoonsbottleup",
            "pictures": [
                require('../res/img/projects/bottleup/pic1.jpg'),
                require('../res/img/projects/bottleup/pic2.jpg'),
                require('../res/img/projects/bottleup/pic3.jpg'),
                require('../res/img/projects/bottleup/pic4.jpg')
            ],
            "captions": [
                "Bottles can be counted by one, by row or by inverting (seen in purple)",
                "Easy to read list - fridge contents are often stored in separate areas",
                "Fridges can have their contents re-arranged, or edited",
                "Editing of bottle"
            ]
        }
    },

    "openglbeach": {
        "title": "OpenGL Beach Scene",
        "imageURL": "https://i.imgur.com/Cj3XUvS.png",
        "imageText": "",
        "startDate": 2020,
        "endDate": 2020,
        "description": "OpenGL work featuring lighting systems, dynamic lighting, object loading",
        "tags": ["C++"],
        "stack": ["OpenGL", "C++"],
        "github": "https://github.com/jamesscully/OpenGL-Beach-Scene",
        "pageContent": {
            "text":
            <div>
                <p>
                    This was a project built for the third year module of Computer Graphics at university. The deliverables
                    for the assignment was an OpenGL scene with shapes that were complex (many vertices, shaded or
                    optionally textures) and animation.
                    To make this part easier the project can read model data from Wavefront .obj formats, extracting
                    vertex data with UV map coordinates and the material the object uses.

                    Similarly, to help with animation and positioning the game takes a page out of the typical game dev / modelling
                    book, by allowing models to store a pointer to a parent object; meaning that positioning can be done
                    absolutely or relatively.
                </p>
                <p>
                    Outside of flying around throwing coconuts on a lonesome island, the project did not serve much practical
                    purpose. It was however extremely fun and engaging trying to get everything to work together and build
                    a very clandestine-sort-of graphics engine, and porting build tools from VS Solution / XCode to CMake.
                </p>
                <p>
                    The GitHub repo lists instructions for downloading and running the program both in Windows and Linux.
                </p>
            </div>,
            "video": "",
            "pictures": [],
            "captions": []
        }
    },

    // "openglcollege" : {
    //     "title": "OpenGL Vertex Demo",
    //     "imageURL": "https://s3.eu-west-2.amazonaws.com/jwscully.uk/res/img/glvertexdemo.png",
    //     "imageText": "",
    //     "startDate": 2016,
    //     "endDate": 2017,
    //     "description": "Created in college to illustrate how vertices and shapes are drawn at the API level, rather than using Blender.",
    //     "tags": ["C++"],
    //     "stack": ["OpenGL", "C++"],
    //     "github": "https://github.com/jamesscully/OpenGL-Vertex-Demo",
    //     "pageContent": {
    //         "text": "",
    //         "video": "",
    //         "pictures": ['']
    //     }
    // },

    "hendrix": {
        "title": "Hendrix Music App",
        "imageURL": "https://i.imgur.com/gxiXfcg.png",
        "imageText": "",
        "startDate": 2019,
        "endDate": 2020,
        "description": "Simple music player for bookmarking points within songs, and navigation between them.",
        "tags": ["Android (Java/Kotlin)"],
        "stack": ["Android", "Kotlin"],
        "github": "https://github.com/jamesscully/Hendrix",
        "pageContent": {
            "text": "",
            "video": "",
            "pictures": [],
            "captions": []
        }
    },

    "dexteritate": {
        "title": "Dexteritate",
        "imageURL": "https://i.imgur.com/Vn6hTjc.png",
        "imageText": "",
        "startDate": 2020,
        "endDate": 2020,
        "description": "Dexterity-based video game used to show game design concepts, such as increasing difficulty, using core mechanics in new ways to achieve an objective and an aesthetic.",
        "tags": ["C#"],
        "stack": ["C#", "Blender", "Unity"],
        "github": "https://github.com/jamesscully/Dexteritate",
        "pageContent": {
            "text": "",
            "video": "",
            "pictures": [],
            "captions": []
        }
    }
}
