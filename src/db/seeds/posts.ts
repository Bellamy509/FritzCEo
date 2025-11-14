import { db } from '@/db';
import { posts, categories } from '@/db/schema';

async function main() {
    // Query categories to get the correct IDs
    const categoriesData = await db.select().from(categories);
    
    const leadershipCategory = categoriesData.find(c => c.slug === 'leadership');
    const aiTechnologyCategory = categoriesData.find(c => c.slug === 'ai-technology');
    const faithLifeCategory = categoriesData.find(c => c.slug === 'faith-life');

    if (!leadershipCategory || !aiTechnologyCategory || !faithLifeCategory) {
        throw new Error('Required categories not found. Please seed categories first.');
    }

    const samplePosts = [
        {
            title: 'The Discipline That Builds a Future',
            slug: 'discipline-that-builds-a-future',
            excerpt: 'A reflection on consistency, long-term thinking, and the daily habits that shape who we become.',
            content: 'Success isn\'t built in a day — it\'s built in the thousand small decisions we make when no one is watching. Discipline is the bridge between goals and accomplishment. In this post, I explore how consistency, intentionality, and delayed gratification are the real drivers of transformation. Whether you\'re building a business, growing in your career, or developing your character, the daily habits you choose today will determine who you become tomorrow. It\'s not about perfection; it\'s about progress. It\'s not about motivation; it\'s about commitment.',
            categoryId: leadershipCategory.id,
            date: '2024-04-01',
            readTime: '5 min read',
            published: 1,
            createdAt: new Date('2024-04-01T10:00:00Z').toISOString(),
            updatedAt: new Date('2024-04-01T10:00:00Z').toISOString(),
        },
        {
            title: 'AI for Real-World Business Growth',
            slug: 'ai-for-real-world-business-growth',
            excerpt: 'How practical AI tools are transforming operations, decision-making, and customer experience in modern companies.',
            content: 'AI is no longer just a buzzword — it\'s a practical tool that businesses of all sizes can leverage for growth. From automating repetitive tasks to gaining deeper insights into customer behavior, AI is reshaping how we work. In this post, I break down real-world applications of AI that are driving efficiency, improving decision-making, and enhancing customer experiences. The key is not to chase every trend, but to identify where AI can create genuine value in your operations. Whether you\'re a startup or an established company, understanding how to integrate AI strategically can give you a competitive edge.',
            categoryId: aiTechnologyCategory.id,
            date: '2024-03-22',
            readTime: '7 min read',
            published: 1,
            createdAt: new Date('2024-03-22T10:00:00Z').toISOString(),
            updatedAt: new Date('2024-03-22T10:00:00Z').toISOString(),
        },
        {
            title: 'Leading with Purpose in Difficult Seasons',
            slug: 'leading-with-purpose-in-difficult-seasons',
            excerpt: 'What challenging moments have taught me about character, service, and leading people well.',
            content: 'Leadership is easy when things are going well. But it\'s in the difficult seasons — the moments of uncertainty, loss, or failure — that true leadership is forged. I\'ve learned that leading well isn\'t about having all the answers; it\'s about showing up with integrity, serving your team with humility, and staying grounded in your values. In this post, I reflect on the hardest seasons of my career and the lessons they taught me about resilience, empathy, and the importance of staying connected to your purpose. Great leaders aren\'t born in comfort; they\'re shaped in the crucible of challenge.',
            categoryId: leadershipCategory.id,
            date: '2024-03-10',
            readTime: '6 min read',
            published: 1,
            createdAt: new Date('2024-03-10T10:00:00Z').toISOString(),
            updatedAt: new Date('2024-03-10T10:00:00Z').toISOString(),
        },
        {
            title: 'Faith, Work, and Becoming Who You\'re Called to Be',
            slug: 'faith-work-and-becoming-who-youre-called-to-be',
            excerpt: 'A personal look at aligning ambition with faith — and building a life that honors God.',
            content: 'For years, I struggled with the tension between ambition and faith. How do you pursue excellence in your work while staying grounded in humility? How do you build a successful career without losing sight of your purpose? In this post, I share my journey of learning to integrate faith into every aspect of my work. It\'s not about choosing between faith and ambition — it\'s about aligning them. It\'s about recognizing that the gifts, talents, and opportunities we have are meant to be used for something greater than ourselves. Building a life that honors God means striving for excellence while serving others with love and integrity.',
            categoryId: faithLifeCategory.id,
            date: '2024-02-28',
            readTime: '4 min read',
            published: 1,
            createdAt: new Date('2024-02-28T10:00:00Z').toISOString(),
            updatedAt: new Date('2024-02-28T10:00:00Z').toISOString(),
        },
    ];

    await db.insert(posts).values(samplePosts);
    
    console.log('✅ Posts seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});