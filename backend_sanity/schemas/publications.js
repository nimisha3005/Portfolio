export default{
    name:'publications',
    title:'Publications',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'author',
            title:'Author',
            type:'string'
        },
        {
            name:'location',
            title:'Location',
            type:'string'
        },
        {
            name:'desc',
            title:'Desc',
            type:'string'
        },
        {
            name:'link',
            title:'Link',
            type:'string'
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ]
}