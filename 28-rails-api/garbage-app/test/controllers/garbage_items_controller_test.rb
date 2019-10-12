require 'test_helper'

class GarbageItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @garbage_item = garbage_items(:one)
  end

  test "should get index" do
    get garbage_items_url
    assert_response :success
  end

  test "should get new" do
    get new_garbage_item_url
    assert_response :success
  end

  test "should create garbage_item" do
    assert_difference('GarbageItem.count') do
      post garbage_items_url, params: { garbage_item: { name: @garbage_item.name, stinkiness: @garbage_item.stinkiness } }
    end

    assert_redirected_to garbage_item_url(GarbageItem.last)
  end

  test "should show garbage_item" do
    get garbage_item_url(@garbage_item)
    assert_response :success
  end

  test "should get edit" do
    get edit_garbage_item_url(@garbage_item)
    assert_response :success
  end

  test "should update garbage_item" do
    patch garbage_item_url(@garbage_item), params: { garbage_item: { name: @garbage_item.name, stinkiness: @garbage_item.stinkiness } }
    assert_redirected_to garbage_item_url(@garbage_item)
  end

  test "should destroy garbage_item" do
    assert_difference('GarbageItem.count', -1) do
      delete garbage_item_url(@garbage_item)
    end

    assert_redirected_to garbage_items_url
  end
end
