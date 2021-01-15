<rss version="2.0">
    <channel>
        <title>{{ $feed_name}}</title>
        <link>{{ $feed_url }} </link>
        <description>{{ $page_description }} </description>
        <language>{{ $page_language }}</language>
        <copyright>Copyright {{ gmdate("Y", time()) }} </copyright>
        <generator>FeedCreator 1.7.3</generator>
        @foreach ($posts as $post)
            <item>
                <title>Harmandir Sahib Hukumnama : {{ date('D d F, Y', strtotime($post->date_hukam))}}</title>
                <link>{{ 'https://www.searchgurbani.com/hukum/?dt=' . $post->date_hukam }}</link>
                <guid>{{ 'https://www.searchgurbani.com/hukum/?dt=' . $post->date_hukam }}</guid>
                <description><![CDATA[ {{ $post->contentEnglish }} ]]></description>
                <pubDate>{{ $post->date_hukam }} </pubDate>
            </item>
        @endforeach
    </channel>
</rss>