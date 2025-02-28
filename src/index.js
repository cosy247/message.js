import { createVNode, render } from 'vue';
import Message from './Message.vue';

/**
 * 提供显示不同类型消息的方法的对象。
 *
 * @namespace message
 * @property {function(string): void} info - 显示信息消息。
 * @property {function(string): void} success - 显示成功消息。
 * @property {function(string): void} warning - 显示警告消息。
 * @property {function(string): void} error - 显示错误消息。
 */
const message = (() => {
  const Vnode = createVNode(Message);
  const div = document.createElement('div');
  div.style = 'display: contents;position: fixed;width: 0;height: 0;';
  document.body.append(div);
  render(Vnode, div);
  return {
    info: (content) => Vnode.component.exposed.show(content, 'info'),
    success: (content) => Vnode.component.exposed.show(content, 'success'),
    warning: (content) => Vnode.component.exposed.show(content, 'warning'),
    error: (content) => Vnode.component.exposed.show(content, 'error'),
  };
})();

export default message;
