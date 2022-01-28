const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {

    const createdUsers = await prisma.user.create({
        data: {
            username: 'Edgeworth',
            email: 'edgeworthm@po.com',
            phone: '+44 7656 009988',
            profile: {
                create: {
                    profilePic: 'https://pm1.narvii.com/6666/74f95f37a0f9b21bcf5971bbd8fa6e4f99a9a90e_00.jpg',
                    bio: 'Chief Prosecutor of the prosecutor\'s office'
                    
                }
            }
        }
    });

    const createdPosts = await prisma.post.create({
        data: {
            title: '*Salary Cutting Noises*',
            content: 'I\'m cutting all of your salaries.',
            likes: 56443,
            posted: true,
            user: {
                connect: {
                    id: createdUsers.id
                }
            }
        }
    })

    const createdComments = await prisma.comment.create({
        data: {
            content: 'metablic processes :(',
            likes: 56443,
            user: {
                connect: {
                    id: createdUsers.id
                }
            }
        }
    })


    console.log(`${createdUsers.count} users created`, createdUsers);

    // Add your code here

    



    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })