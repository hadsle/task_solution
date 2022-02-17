//Sample Message Feed
const MessageFeed =  [
    {
    from: '76372024',
    to: '03676393',
    body: 'Kifak?',
    time: 1613990659
    },
    {

    from: '03123123',
    to: '76372024',
    body: 'can you send me your location?',
    time: 1613990000
    },
    {

    from: '03123123',
    to: '76372024',
    body: 'please natrak 3al tari2',
    time: 1613990002
    },
    {

    from: '03676393',
    to: '76372024',
    body: 'Hello',
    time: 1613990459
    },
    {

    from: '76372024',
    to: '03676393',
    body: 'Ahlan',
    time: 1613990559
    },
    {

    from: '76372024',
    to: '03123123',
    body: 'please natrak 3al tari2',
    time: 1613990502
    },
]

    //Sample Contacts List

 const contactList = [
    {
    number: '76372024',
    name: 'Samir',
    },
    {
    number: '03676393',
    name: 'George',
    },
    {
    number: '03123123',
    name: 'Saji3',
    }
]


// sorting array on the basis of their time
MessageFeed.sort(dynamicsort('time'))

// the desired data structure
messagesOutput = [];

//Create an object for this contact in the messagesOutputs by iterating through the contactList. 
for (var i = 0; i < contactList.length; i++) {

    messagesOutput[i] = {
    name: contactList[i].name,
    messages: []
} ;

}

//Now we iterate over all of the messageFeed and assign this message to the sender and receiver contacts.
for (var i = 0; i < MessageFeed.length; i++) {

    const from = MessageFeed[i].from;
    const to = MessageFeed[i].to;
    
    // getting sender
    messagesOutput.find( msgCont => msgCont.name == contactList.find( contact => contact.number == from).name ).messages.push(
        
        // pushing this message information
        {
        from: MessageFeed[i].from,
        to: MessageFeed[i].to,
        body: MessageFeed[i].body,
        time: MessageFeed[i].time,
        position: 'Right'
        }
    )

    // getting reciever
    messagesOutput.find( msgCont => msgCont.name == contactList.find( contact => contact.number == to).name ).messages.push(

        {
        from: MessageFeed[i].from,
        to: MessageFeed[i].to,
        body: MessageFeed[i].body,
        time: MessageFeed[i].time,
        position: 'Left'
        }
    )

}

messagesOutput.forEach( (msgCont) => {

    console.log(msgCont)

})
// Following method is used for sorting the array MessagesFeed

function dynamicsort(property,order) {
    var sort_order = 1;
    if(order === "desc"){
        sort_order = -1;
    }
    return function (a, b){  
        if(a[property] < b[property]){
                return -1 * sort_order; 
        }
        else if(a[property] > b[property]){
                return 1 * sort_order;
        }
        else{
                return 0 * sort_order;
        }
    }
}



