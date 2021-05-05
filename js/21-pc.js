/*
PC
reikia suskaiciuoti kiek turime laisvos vietos kompe
*/

const HDD = 100;

const files = [
    {
        type: 'folder',
        name: 'C',
        content: [
            {
                type: 'folder',
                name: 'Programs',
                content: [
                    {
                        type: 'folder',
                        name: 'Paint',
                        content: [
                            {
                                type: 'file',
                                name: 'paint.exe',
                                size: 10
                            },
                            {
                                type: 'file',
                                name: 'config.json',
                                size: 2
                            }
                        ]
                    },
                    {
                        type: 'folder',
                        name: 'MS word',
                        content: [
                            {
                                type: 'file',
                                name: 'word.exe',
                                size: 15
                            },
                            {
                                type: 'file',
                                name: 'config.json',
                                size: 2
                            },
                            {
                                type: 'file',
                                name: 'demo.json',
                                size: 1
                            }
                        ]
                    }
                ]
            },
            {
                type: 'file',
                name: 'asd.txt',
                size: 7
            }
        ]
    },
    {
        type: 'folder',
        name: 'D',
        content: [
            {
                type: 'folder',
                name: 'Programs',
                content: [
                    {
                        type: 'folder',
                        name: 'Paint',
                        content: [
                            {
                                type: 'file',
                                name: 'paint.exe',
                                size: 10
                            },
                            {
                                type: 'file',
                                name: 'config.json',
                                size: 2
                            }
                        ]
                    },
                    {
                        type: 'folder',
                        name: 'MS word',
                        content: [
                            {
                                type: 'file',
                                name: 'word.exe',
                                size: 15
                            },
                            {
                                type: 'file',
                                name: 'config.json',
                                size: 2
                            },
                            {
                                type: 'file',
                                name: 'demo.json',
                                size: 1
                            }
                        ]
                    }
                ]
            },
            {
                type: 'file',
                name: 'asd.txt',
                size: 7
            }
        ]
    },
    {
        type: 'file',
        name: 'wer.txt',
        size: 7
    }
];

const usedSpace = (list) => {
    let space = 0;

    for (const item of list) {
        if (item.type === 'file') {
            space += item.size;
        }

        if (item.type === 'folder') {
            space += usedSpace(item.content);
        }
    }

    return space;
}

const freeSpace = HDD - usedSpace(files);

console.log(freeSpace);