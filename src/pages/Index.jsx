import React from "react";
import { ChakraProvider, Box, Flex, VStack, HStack, Text, Input, Button, IconButton, Avatar, Divider, useToast } from "@chakra-ui/react";
import { FaTwitter, FaFeatherAlt, FaRegComment, FaRetweet, FaRegHeart, FaRegBookmark } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  // Dummy tweets data
  const tweets = [
    {
      id: 1,
      author: {
        name: "John Doe",
        handle: "@johndoe",
        avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzA5ODE2MzE2fDA&ixlib=rb-4.0.3&q=80&w=1080',
      },
      content: "Just setting up my twttr clone!",
      comments: 12,
      retweets: 5,
      likes: 24,
      isLiked: false,
    },
    // More tweets can be added here
  ];

  // Function to handle like button click
  const handleLike = (tweetId) => {
    toast({
      title: "Liked!",
      description: "You've liked this tweet.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    // Logic to handle the like action, such as updating state
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <Flex direction="column" maxW="600px" mx="auto">
          {/* Header */}
          <VStack align="stretch" spacing={4}>
            <HStack justifyContent="space-between">
              <Text fontSize="2xl" fontWeight="bold">
                Home
              </Text>
              <IconButton icon={<FaFeatherAlt />} isRound size="lg" colorScheme="blue" aria-label="Compose Tweet" />
            </HStack>
            <Divider />
          </VStack>

          {/* Tweet input */}
          <HStack spacing={3} my={4}>
            <Avatar src="https://images.unsplash.com/photo-1655149000742-602179feb1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBsYWNlaG9sZGVyfGVufDB8fHx8MTcwOTgyMTA4MXww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Input placeholder="What's happening?" size="md" />
          </HStack>

          {/* Tweets list */}
          <VStack align="stretch" spacing={4}>
            {tweets.map((tweet) => (
              <Box key={tweet.id} p={3} boxShadow="md" borderRadius="md" bg="gray.50">
                <HStack spacing={3}>
                  <Avatar src={tweet.author.avatarUrl} />
                  <VStack align="stretch">
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold">{tweet.author.name}</Text>
                      <Text color="gray.500">{tweet.author.handle}</Text>
                    </HStack>
                    <Text>{tweet.content}</Text>
                    {/* Tweet actions */}
                    <HStack spacing={3}>
                      <IconButton icon={<FaRegComment />} size="sm" aria-label="Comment" />
                      <IconButton icon={<FaRetweet />} size="sm" aria-label="Retweet" />
                      <IconButton icon={<FaRegHeart />} size="sm" aria-label="Like" onClick={() => handleLike(tweet.id)} color={tweet.isLiked ? "red.400" : undefined} />
                      <IconButton icon={<FaRegBookmark />} size="sm" aria-label="Save Tweet" />
                    </HStack>
                  </VStack>
                </HStack>
              </Box>
            ))}
          </VStack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
