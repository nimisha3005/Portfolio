export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'start',
            title:'Start',
            type:'string'
        },
        {
            name:'end',
            title:'End',
            type:'string'
        },
        {
            name:'works',
            title:'Works',
            type:'array',
            of:[{ type:'workExperience'}]
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ]
}