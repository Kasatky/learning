
text = 'a';

switch (text)
{
    case 1:
        console.log('one')
    break;
    case 2:
        console.log('two')
    break;
    case 3:
        console.log('three')
    break;
    case 4:
        console.log('four')
    break;
    case 5:
        console.log('five')
    break;

    case 'a':
    case 'b':
        console.log('only digits please');
        console.log('...');
        break;

    default:
        console.log('no match')
}

