    const cannonsReady = (gunners) => {
        let array = Object.values(gunners)
    return array.includes('nay') ? 'Shiver me timbers!' : 'Fire!'

    }


console.log(cannonsReady({'Mike':'aye',
                                'Joe':'aye',
                                'Johnson':'aye',
                                'Peter':'aye'}))