export default {
    name:'workExperience',
    title:'Work Experience',
    type:'document',
    fields:[
           {name:'name',
               title:'name',
               type:'string'
            },
            {
                name:'company',
                title:'Company',
                type:'string'
            },
            {
                name:'role',
                title:'Role',
                type:'string'
            },
            {
                name:'desc',
                title:'Desc',
                type:'string'
            },
            {
                name:'icon',
                title:'Icon',
                type: 'image',
                options: {
                  hotspot: true,
                },
            },
    ]
}